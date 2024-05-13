const postRepository = require('../Repository/postRepository');

class PostService {
    getAllPosts() {
        return postRepository.getAllPosts();
    }

    getPostById(id) {
        return postRepository.getPostById(id);
    }

    createPost(title, content) {
        return postRepository.createPost(title, content);
    }

    updatePost(id, title, content) {
        return postRepository.updatePost(id, title, content);
    }

    deletePost(id) {
        return postRepository.deletePost(id);
    }
}

module.exports = new PostService();
