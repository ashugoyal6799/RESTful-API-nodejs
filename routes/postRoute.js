const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');

// getting all the posts
router.get('/', postController.getAllPosts);


// creating a new post
router.post('/',postController.createPost);

module.exports = router;
