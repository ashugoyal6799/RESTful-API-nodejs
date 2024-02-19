const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema ({
    name: {
    type: String,
    required: true
    },
    value: {
        type: Number,
        required: true
    }
})


// mongoose will internally convert `post` to  `posts` for the collection name.
const Post = mongoose.model('post',PostSchema); // here 'post' is model name 

module.exports = Post;




