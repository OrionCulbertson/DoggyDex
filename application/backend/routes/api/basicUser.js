// routes/api/basicuser.js
const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../config/auth.config");// Keeps secret key

// function getHashedPassword(password){
   
//   const saltRounds = 10; 
//   const hashedPassword = new Promise((resolve, reject) => {
//     bcrypt.genSalt(saltRounds, function(err, salt){
//       bcrypt.hash(password, salt, function(err, hash) {
//         if(err) reject(err)
//         resolve(hash)
//       });
//     });
//   });
//   return hashedPassword;
// } in case we implement update user function will be necc. 



// Load Basic_User model
const BasicUser = require('../../models/Basic_User');


router.get('/test', (req, res) => res.send('routes route testing!'));

// @route GET api/basicuser
router.get('/', (req, res) => {
  BasicUser.find()
    .then(user => res.json(user))
    .catch(err => res.status(404).json({ nodogbreedfound: 'No user found' }));
});

// @route GET api/basicuser/:id
router.get('/:id', (req, res) => {
  BasicUser.findById(req.params.id)
  .then(user => res.json(user))
  .catch(err => res.status(404).json({ nouserfound: '***No User found***' }));

});

//Basic_User router

router.post('/signup', (req, res, next) => {
  BasicUser.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Email already exists"
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {

            const user = new BasicUser({
              _id: new mongoose.Types.ObjectId(),
              name: req.body.name,
              userName: req.body.userName,
              email: req.body.email,
              password: hash
            });
            user
              .save()
              .then(result => {
                console.log(result);
                res.status(201).json({
                  message: "User successfully created"
                });
              })
              .catch(err => {
                console.log(err);

                res.status(500).json({
                  error: err
                });
              });
          }
        });
      }
    });
});

/*
//Basic_User router
router.post('/', (req, res) => {
  BasicUser.create(req.body)
  .then(user => res.json({ msg: 'BasicUser added successfully' }))
  .catch(err => res.status(400).json({ error: 'Unable to add this user' }));  
});
*/
// @route POST api/basicuser/login
// @description Update basicuser
router.post("/login", (req, res, next) => {


  BasicUser.findOne({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth failed. Check password and email."
          });
        }

        if (result) {
           const token = jwt.sign({userName: user.userName, userId: user._id}, // Get any of the user's properties
            config.secret,
            {
                expiresIn: "1h"
            }
          );
          return res.status(200).json({
            message: "Auth successful",
            token: token,
            name: user.name,
            userName: user.userName,
            email: user.email,
            userId: user.userId,
          });
        }

        res.status(401).json({
          message: "Auth failed"
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(403).json({
        error: err
      });
    });
});


// @route GET api/basicuser/:id
// @description Update basicuser
router.put('/:id', (req, res) => {
  BasicUser.findByIdAndUpdate(req.params.id, req.body)
    .then(user => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});


// @route GET api/basicuser/:id
// @description Delete user by id
router.delete('/:id', (req, res) => {
  BasicUser.findByIdAndRemove(req.params.id, req.body)
    .then(user => res.json({ mgs: 'User entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a user found' }));
});





module.exports = router;


