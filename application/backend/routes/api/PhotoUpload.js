const express = require('express');
const fileUpload = require('express-fileupload');
const router = express.Router();

// const app = express();
// app.use(fileUpload());

// Upload Endpoint
//Photo Upload
//returns dog id, confidence score
router.post('/upload', (req, res) => {
  // if (req.files === null) {
  //   return res.status(400).json({ msg: 'No file uploaded' });
  // }
  console.log("Made it");
  // const file = req.files.file;

  // file.mv(`${__dirname}/uploads/${file.name}`, err => {
  //   if (err) {
  //     console.error(err);
  //     return res.status(500).send(err);
  //   }

  //   //Run ML Classification on Photo ->return dog breed

  //   //Get dog id of dog breed from database ->

  //   //Return file info w/ dog id
  //   res.json({ fileName: file.name, filePath: `/uploads/${file.name}`, dog_id: 20, confidenceScore });

  //   //Delete photo, needs added
  // });
  res.send("Sending it back");
});

module.exports = router;
