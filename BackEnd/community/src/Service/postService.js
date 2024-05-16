const postRepository = require('../Repository/postRepository');
const CommunityRepository= require('../Repository/communityRepository');


class PostService {
    getAllPosts() {
        return postRepository.getAllPosts();
    }

    getPostById(id) {
        return postRepository.getPostById(id);
    }

    createPost(title, content , communityId) {
        return postRepository.createPost(title, content, communityId);
    }

    updatePost(id, title, content) {
        return postRepository.updatePost(id, title, content);
    }

    deletePost(id) {
        return postRepository.deletePost(id);
    }
}

module.exports = new PostService();
