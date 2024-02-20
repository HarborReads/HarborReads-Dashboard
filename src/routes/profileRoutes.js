// profileRoutes.js
const express = require('express');
const router = express.Router();
//const { requireLogin } = require('../middleware/authMiddleware'); //implement requirelogin in auth.js
const { getEditProfileForm, updateProfile } = require('../controllers/profileController');

// Route to display edit profile form
router.get('/edit-profile', getEditProfileForm);

// Route to handle profile update
router.post('/edit-profile', updateProfile);

module.exports = router;
