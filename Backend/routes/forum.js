const express = require('express');
const router = express.Router();

const forumCtrl = require('../controllers/forum');
const auth = require('../middleware/auth');


router.post('/', auth, forumCtrl.createForum);
router.delete('/:id', auth, forumCtrl.deleteForum);
router.get('/', auth, forumCtrl.getAllForums);


module.exports = router;