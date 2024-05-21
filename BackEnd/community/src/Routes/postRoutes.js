const express = require('express');
const router = express.Router();
const postController = require('../Controller/postController');
const postMiddleware = require('../middlewares/postMiddleware')



router.get('/getpost', postController.getAllPosts);
router.get('/getpost/:postId', postController.getPostById);
router.post('/createpost/:communityId', postController.createPost);
router.put('/update/:postId', postController.updatePost);
router.delete('/delete/:postId', postController.deletePost);

module.exports = router;

