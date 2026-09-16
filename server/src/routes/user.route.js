const express = require('express');
const router = express.Router();
const upload = require('../config/multer.config');
const create = require('../controllers/user.controller');

router.post('/create', upload.array('images'), create);


module.exports = router;