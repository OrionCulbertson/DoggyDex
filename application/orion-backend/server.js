const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload());

// Upload Endpoint
//Photo Upload
//returns dog id, confidence score
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    //Run ML Classification on Photo ->return dog breed

    //Get dog id of dog breed from database ->

    //Return file info w/ dog id
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}`, dog_id: 20 });

    //Doesn't delete photo, needs added
  });
});


app.get('/dog-info/:dog_id', (req, res) => {
  const dog = {
    dog_id: req.params.dog_id,
    dog_breed: "German Shepherd",
  }
  console.log("In Server", req.params);
  res.json(dog);
})
app.listen(5000, () => console.log('Server Started...'));


// 
// app.get('/user/{id}/doggydex' -> return array of DogObjects
// app.get('/dog-info/alldogs' -> return array of All DogObjects