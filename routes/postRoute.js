const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');

// Get all the posts
router.get('/', postController.getAllPosts);


// Creating a new post
router.post('/',postController.createPost);


// Get a post by the id
router.get('/:id',postController.getPostByID);


// Delete a post by id
router.delete('/:id',postController.deletePostByID);
module.exports = router;
