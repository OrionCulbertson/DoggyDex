// routes/api/basicuser.js
const express = require('express');
const router = express.Router();

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
router.post('/signup', (req, res) => {
  BasicUser.create(req.body)
  .then(user => res.json({ msg: 'BasicUser added successfully' }))
  .catch(err => res.status(400).json({ error: 'Unable to add this user' }));  
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
    .then(user => res.json({ mgs: 'Dogbreed entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a dogbreed' }));
});





module.exports = router;


