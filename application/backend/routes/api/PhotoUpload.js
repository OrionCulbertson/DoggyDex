const express = require('express');
const multer = require('multer'); // Middleware to upload img files
const Photo = require('../../models/Photo');
const router = express.Router();
const {spawn} = require('child_process');
const fs = require('fs')

//========= Upload, store, retrieve and delete an image ==============
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './ml_files')
    },
    filename: function (req, file, cb) {
      const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniquePrefix + '-' + file.originalname)
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5 // max file size: ~ 5.3MB = 5.2m bytes
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpeg|jpg|png)$/)) { // The three image file extensions that can be handled
            cb(new Error('only upload files with jpg, jpeg or png format.'));
        }
        cb(undefined, true); // continue with upload
    }
})

// From front-end, route: api/image/upload.
/*
In: Send filepath of temporary copy of uploaded photo to mlScript.py
Out: ML returns JSON in HTTP response:
{
    "humanPresent": "0",
    "breedName": "Collie",
    "confidenceScore": "90"
}
If no dog or human detected, empty JSON is returned
*/
router.post('/upload', upload.single('image'), async (req, res, next) => {
    try {
        let scriptToOpen = "./ml_files/mlScript.py";
        let JSONData = [];
        let photoFile = req.file.path;

        // spawn new child process to call the python script
        const python = spawn('python', [scriptToOpen, photoFile]);

        // collect data from script output
        python.stdout.on('data', function (data) {
            JSONData.push(data)
        })

        // in close event we are sure that stream is from child process is closed
        python.on('close', (code) => {
            // send data to browser
            res.status(201).send(JSONData.join(''))
            // Head to function to delete temp photo file, but only after python is finished
            next();
        })
    } catch (error) {
        res.status(500).send({
            upload_error: 'Error while uploading file...Try again later.'
            });
    }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(500).send({
                upload_error: error.message
            });
        }
    }
);

// Function to remove locally stored uploaded photo
router.use(function(req, res) {
    const path = req.file.path;

    fs.unlink(path, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    })
});

// @route GET (from front-end) api/image/id/<image id...>
// @description get image by id
router.get('/id/:id', async (req, res) => { // Retrieve image
  try {
    const result = await Photo.findById(req.params.id); // Finds image by ID
    res.set('Content-Type', 'image/jpeg'); // Turns binary file into an *jpeg image
    res.send(result.photo); // Returns an *jpeg image
  } catch (error) {
    res.status(400).send({ get_error: 'Error while getting photo.' });
  }
});

// @route delete api/image/delete/:id
// @description Delete image by id
router.delete('/delete/:id', (req, res) => {
    Photo.findByIdAndDelete(req.params.id, req.body)
      .then(user => res.json({ mgs: 'Image entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No image to delete.' }));
  });

module.exports = router;
