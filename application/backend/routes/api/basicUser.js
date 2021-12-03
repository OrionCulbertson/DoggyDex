// routes/api/basicuser.js
global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config/auth.config'); // Keeps secret key


// Load Basic_User model
const BasicUser = require('../../models/Basic_User');
router.get('/test', (req, res) => res.send('routes route testing!'));

// @route GET api/basicuser
router.get('/', (req, res) => {
  BasicUser.find()
    .then((user) => res.json(user))
    .catch((err) => res.status(404).json({ nodogbreedfound: 'No user found' }));
});

// @route GET api/basicuser/:id
router.get('/:id', (req, res) => {
  BasicUser.findById(req.params.id)
  .then((user) => {
    const token = jwt.sign({
        userName: user.userName,
        userId: user._id,
        dogbreedIDs: user.dogbreedIDs,
      }, // Get any of the user's properties
      config.secret,
      {
        expiresIn: '1h',
      }
    );
    return res.status(200).json({
          message: 'Auth successful',
          token: token,
          name: user.name,
          email: user.email,
        });
      })
    .catch((err) =>
      res.status(404).json({ nouserfound: 'Unknown err' })
    );
});


//Basic_User router
router.post('/signup', (req, res, next) => {
    BasicUser.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: 'Email already exists',
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            const user = new BasicUser({
              _id: new mongoose.Types.ObjectId(),
              name: req.body.name,
              userName: req.body.userName,
              email: req.body.email,
              password: hash,
            });
            user
              .save()
              .then((result) => {
                console.log(result); // <---- ---- Remove when finishing dev
                res.status(201).json({
                  message: 'User successfully created',
                  name: user.name,
                  email: user.email
                });
              })
              .catch((err) => {
                console.log(err);

                res.status(500).json({
                  error: err,
                });
                user
                .save()
                .then(result => {
                    console.log(result); // <---- ---- Remove when finishing dev
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

// @route POST api/basicuser/login
// @description Update basicuser
router.post('/login', (req, res, next) => {
  BasicUser.findOne({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: 'Auth failed',
        });
      }
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: 'Auth failed. Check password and email.',
          });
        }
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (err) {
            return res.status(401).json({
                message: "Auth failed. Check password and email."
            });
            }

            if (result) {
            const token = jwt.sign(
            {
              userName: user.userName,
              userId: user._id,
              dogbreedIDs: user.dogbreedIDs,
            }, // Get any of the user's properties
            config.secret,
            {
              expiresIn: '1h',
            }
          );
          return res.status(200).json({
            message: 'Auth successful',
            token: token,
            name: user.name,
            email: user.email,
          });


        }

        res.status(401).json({
          message: 'Auth failed',
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(403).json({
        error: err,
      });
    });
});

// @route GET api/basicuser/:id
// @description Update basicuser
router.put('/:id', (req, res) => {
  BasicUser.findByIdAndUpdate(req.params.id, req.body)
    .then((user) => res.json({ msg: 'Updated successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// find by document id and update and push item in array
// @route PUT: user_id gets the account where a new DOGBREED ID will be insert
// dog_id is the actual DOGBREED ID
// Request: hhtp... /api/basicuser/add/<MongoDB user ID>/<dog id>

router.put('/add/:user_id/:dog_id', (req, res) => {
  BasicUser.findByIdAndUpdate(req.params.user_id, {
    $addToSet: {
      dogbreedIDs: req.params.dog_id,
    },
  })
    .then((user) => res.json({ msg: 'Dogbreed ID added successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to update  dogbreed ID' })
    );
});

// @route GET api/dogbreed/:id
// @description Delete dog by id
router.delete('/:id', (req, res) => {
    BasicUser.findByIdAndRemove(req.params.id, req.body)
    .then(user => res.json({ mgs: 'User entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a user found' }));
});

module.exports = router;
