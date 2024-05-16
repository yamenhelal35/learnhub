const dotenv = require('dotenv')
const { admin } = require('../Config/firebaseeconfig')

exports.validatePost = (req, res, next) => {
    const { title, content , communityId } = req.body;
    if (!title || !content || !communityId) {
        return res.status(400).json({ error: 'Title and content are required' });
    }
    next();
};

exports.checkPostExists = (req, res, next) => {
    const postId = req.params.id;
    const post = posts.find(post => post.id === parseInt(postId));
    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }
    next();
};
