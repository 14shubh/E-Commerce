const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');


router.get('/login', userController.loginPage);
router.get('/registration', userController.registrationPage);

module.exports = router;