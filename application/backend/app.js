const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const morgan = require('morgan');

// routes
const basicUserURL = require('./routes/api/basicUser');
const dogbreedURL = require('./routes/api/dogBreed');
const photoUploadURL = require('./routes/api/PhotoUpload');
const userDoggyDex = require('./routes/api/userDoggydex');
const imageURL = require('./routes/api/PhotoUpload');
// Enables EXPRESS
const app = express();
// Connect Database
connectDB();

// Init Middleware
app.use(morgan("dev"));
app.use(express.json({ extended: false }));
// cors
app.use(cors({ origin: true, credentials: true }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Router
app.use('/api/basicuser', basicUserURL);
app.use('/api/dogbreed', dogbreedURL);
<<<<<<< HEAD
app.use('/api/image', imageURL);
=======
app.use('/api/photo', photoUploadURL);
app.use('/api/userdoggydex', userDoggyDex);
app.use('/api/image',imageURL);
>>>>>>> e21e3f2332ac2aec9983e1bfb6e3b71a26dc4543


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));