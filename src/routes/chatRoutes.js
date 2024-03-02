
const express = require('express');
const router = express.Router();
const {startConversation,generateResponse} = require('../controllers/chatController/avidReadersChatController');

router.post('/avidReadersChat/startConversation', startConversation);
router.post('/avidReadersChat/generateResponse', generateResponse);

module.exports = router;
