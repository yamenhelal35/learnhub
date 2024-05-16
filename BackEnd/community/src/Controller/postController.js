const postService = require('../Service/postService');
const admin = require('../Config/firebaseeconfig');
const communityController = require('../Controller/communityController');
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await postService.getAllPosts();
        res.json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getPostById = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await postService.getPostById(postId);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.json(post);
    } catch (error) {
        console.error('Error fetching post by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.createPost = async (req, res) => {
    try {
        const { title, content , communityId } = req.body;
        const newPost = await postService.createPost(title, content, communityId);
        console.log(`New Post: ${newPost}`);
        res.status(201).json(newPost);
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.updatePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const { title, content , communityId } = req.body;
        const updatedPost = await postService.updatePost(postId, title, content , communityId);
        if (!updatedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.json(updatedPost);
    } catch (error) {
        console.error('Error updating post:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.deletePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const deleted = await postService.deletePost(postId);
        if (!deleted) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.status(204).end();
    } catch (error) {
        console.error('Error deleting post:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
