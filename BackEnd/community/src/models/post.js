
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    communityId: { 
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
