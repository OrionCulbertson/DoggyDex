const mongoose = require('mongoose');

const User_Doggydex = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    breedid: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('user_doggydex', User_Doggydex);