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


// To get all the posts 
exports.getAllPosts = async(req,res,next) => {
    try{
        //.find(query, projection)
        
        /* 
        0 for not showing and 1 for showing to users
        by default _id will always be shown to users and if you dont want to show you should write _id:0 explicitly
        */        

        // passing projection to find function -> showing only name,value to users
        // const posts = await Post.find({},{name:1, value:1, _id:0});

        // passing query to find function -> finding all posts that have value 12
        //const posts = await Post.find({value:12},{});

        //Find all posts 
        const posts = await Post.find();
        console.log(posts);
        res.json({
            message: posts
        })
    }
    catch(err) {
        res.status(500).json({
            message:'Error'
        })
    }
    
};
