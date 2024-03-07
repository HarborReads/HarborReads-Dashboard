
const express = require('express');
const router = express.Router();
const {startConversation,generateResponse,generateRecommendation} = require('../controllers/chatController/avidReadersChatController');

router.post('/avidReadersChat/startConversation', startConversation);
router.post('/avidReadersChat/generateResponse', generateResponse);
router.post('/avidReadersChat/generateRecommendation',generateRecommendation);

module.exports = router;