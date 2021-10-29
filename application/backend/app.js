const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const basicUserURL = require('./routes/api/basicUser');
const dogbreed = require('./routes/api/doogBreed');
// Enables EXPRESS
const app = express();
// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
// cors
app.use(cors({ origin: true, credentials: true }));

// use Router
app.use('/api/basicuser', basicUserURL);
app.use('/api/dogbreed', dogbreed);

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));