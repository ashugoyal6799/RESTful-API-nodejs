const express = require('express');
const Post = require('../models/Post.model')

/*
// Creating a new Post and Saving using Promise
exports.createPost = (req,res,next) => {
    console.log(req.body);

    // const post = new Post(req.body); // can also use like this coz req.body is same
    // as what we have written inside it
    const post =  new Post({
        name: req.body.name,
        value: req.body.value
    });

    // Saving the post in db
    post.save()
        .then(result => {
            console.log(result);
            res.json({
                message: 'Post Created'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Post Not Created'
            });
        })
}
*/

// Creating a new Post and Saving using Async-Await
exports.createPost = async(req,res,next) => {
    try{
        const post = new Post(req.body);
        const result = await post.save();
        res.json({
            message: 'Post Created'
        });
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message: 'Post Not Created'
        });
    }
}