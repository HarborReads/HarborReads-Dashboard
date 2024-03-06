
const express = require('express');
const router = express.Router();
const {aRstartConversation,aRgenerateResponse} = require('../controllers/chatController/avidReadersChatController');
const {nRstartConversation,nRgenerateResponse} = require('../controllers/chatController/newReadersChatController');
const {bookChatStartConversation,bookChatGenerateResponse} = require('../controllers/chatController/bookChatController');

router.post('/avidReadersChat/startConversation', aRstartConversation);
router.post('/avidReadersChat/generateResponse', aRgenerateResponse);

router.post('/newReadersChat/startConversation', nRstartConversation);
router.post('/newReadersChat/generateResponse', nRgenerateResponse);

router.post('/bookChat/startConversation', bookChatStartConversation);
router.post('/bookChat/generateResponse', bookChatGenerateResponse);

module.exports = router;
