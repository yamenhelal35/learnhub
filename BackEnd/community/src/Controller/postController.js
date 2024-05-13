const postService = require('../Service/postService');
const admin = require('../Config/firebaseeconfig');



exports.getAllPosts = (req, res) => {
    const posts = postService.getAllPosts();
    res.json(posts);
};


exports.getPostById = (req, res) => {
    const postId = req.params.id;
    const post = postService.getPostById(postId);
    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post);
};


exports.createPost = (req, res) => {
    const { title, content } = req.body;
    const newPost = postService.createPost(title, content);
    res.status(201).json(newPost);
};

exports.updatePost = (req, res) => {
    const postId = req.params.id;
    const { title, content } = req.body;
    const updatedPost = postService.updatePost(postId, title, content);
    if (!updatedPost) {
        return res.status(404).json({ error: 'Post not found' });
    }
    res.json(updatedPost);
};


exports.deletePost = (req, res) => {
    const postId = req.params.id;
    const deleted = postService.deletePost(postId);
    if (!deleted) {
        return res.status(404).json({ error: 'Post not found' });
    }
    res.status(204).end();
};
