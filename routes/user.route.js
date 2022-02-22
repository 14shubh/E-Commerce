const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');


router.get('/', userController.loginPage);
router.get('/register', userController.registrationPage);
router.get('/profile', userController.profilePage);


module.exports = router;