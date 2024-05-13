const Post = require('../models/post');

let posts = []; // Sample posts array
``
class PostRepository {
    getAllPosts() {
        return posts;
    }

    getPostById(id) {
        return posts.find(post => post.id === parseInt(id));
    }

    createPost(title, content) {
        const newPost = new Post(Date.now(), title, content);
        posts.push(newPost);
        return newPost;
    }

    updatePost(id, title, content) {
        const post = this.getPostById(id);
        if (!post) {
            return null;
        }
        post.title = title || post.title;
        post.content = content || post.content;
        return post;
    }

    deletePost(id) {
        const index = posts.findIndex(post => post.id === parseInt(id));
        if (index === -1) {
            return false;
        }
        posts.splice(index, 1);
        return true;
    }
}

module.exports = new PostRepository();
