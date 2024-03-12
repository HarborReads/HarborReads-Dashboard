const express = require('express');
const router = express.Router();

const {aRstartConversation,aRgenerateResponse,aRgenerateRecommendation} = require('../controllers/chatController/avidReadersChatController');
const {nRstartConversation,nRgenerateResponse,nRgenerateRecommendation} = require('../controllers/chatController/newReadersChatController');
const {bookChatStartConversation,bookChatGenerateResponse,bCgenerateRecommendation} = require('../controllers/chatController/bookChatController');


router.post('/avidReadersChat/startConversation', aRstartConversation);
router.post('/avidReadersChat/generateResponse', aRgenerateResponse);
router.post('/avidReadersChat/generateRecommendation',aRgenerateRecommendation);
//newreader routes

router.post('/newReadersChat/startConversation', nRstartConversation);
router.post('/newReadersChat/generateResponse', nRgenerateResponse);
router.post('/avidReadersChat/generateRecommendation',nRgenerateRecommendation);






module.exports = router;