const express = require('express');
const adminController = require('../controller/admin.controller');
const authenticate = require('../middleware/authenticate');
const router = express.Router();

router.get("/", adminController.adminLoginPage);

router.post("/login", adminController.adminLoginPost);

router.get('/dashboard', authenticate.isAuthenticate, adminController.adminDashboard)

module.exports = router;