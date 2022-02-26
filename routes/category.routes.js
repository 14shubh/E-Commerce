const express = require('express');
const categoryController = require('../controller/category.controller');
const auth = require('../middleware/authenticate');
const router = express.Router();

const multer=require('multer');
 const upload=multer({dest: 'public/categoryImages'})

// router.get("/addCategory",auth.isAuthenticate,)
router.post("/addCategory", auth.isAuthenticate,upload.single('categoryImage'),categoryController.addCategory);
 router.get("/categoryList",categoryController.categoryLits);

// router.get("/categoryList",auth.isAuthenticate,categoryController.categoryLitsShow);

module.exports = router;