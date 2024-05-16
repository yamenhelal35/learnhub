const Post = require('../models/post');
const community = require('../models/community');

let posts = []; // Sample posts array

class PostRepository {
    getAllPosts() {
        try {
            return posts;
        } catch (error) {
            console.error('Error fetching all posts:', error);
            throw new Error('Failed to fetch posts');
        }
    }

    getPostById(id) {
        try {
            const post = posts.find(post => post.id === parseInt(id));
            if (!post) {
                throw new Error('Post not found');
            }
            return post;
        } catch (error) {
            console.error(`Error fetching post with ID ${id}:`, error);
            throw new Error(`Failed to fetch post with ID ${id}`);
        }
    }

    createPost(title, content, communityId) {
        try {
            const newPost = new Post({
                id: Date.now(), // Assuming the ID is generated as a timestamp
                title,
                content,
                community: communityId,
                createdAt: Date.now()
            });
            posts.push(newPost);
            return newPost;
        } catch (error) {
            console.error('Error creating post:', error);
            throw new Error('Failed to create post');
        }
    }

    updatePost(postId, title, content) {
        try {
            const post = this.getPostById(postId);
            if (!post) {
                throw new Error('Post not found');
            }
            post.title = title || post.title;
            post.content = content || post.content;
            return post;
        } catch (error) {
            console.error(`Error updating post with ID ${postId}:`, error);
            throw new Error(`Failed to update post with ID ${postId}`);
        }
    }

    deletePost(postId) {
        try {
            const index = posts.findIndex(post => post.id === parseInt(postId));
            if (index === -1) {
                throw new Error('Post not found');
            }
            posts.splice(index, 1);
            return true;
        } catch (error) {
            console.error(`Error deleting post with ID ${postId}:`, error);
            throw new Error(`Failed to delete post with ID ${postId}`);
        }
    }
}

module.exports = new PostRepository();
