const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');

// creating a new post
router.post('/',postController.createPost);

module.exports = router;
