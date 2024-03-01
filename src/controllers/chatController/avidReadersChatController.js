const express = require('express');
const bodyParser = require('body-parser');
const openaiConnection = require('./openAI'); 

const app = express();
const chatGPT = new openaiConnection("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");

app.use(bodyParser.json());

// Define static questions
const staticQuestions = [
    "Tell me about the last book you read that you couldn't put down. What was it about?",
    "Describe a book that challenged your perspective or made you think deeply about a topic. What was the book and how did it impact you?",
    "Share a book recommendation that you've received and loved. What was the book and why do you think it resonated with you?",
    "Think about a book that surprised you with its plot twist or ending. What was the book and how did it affect your reading experience?",
    "Discuss a book that you've read multiple times. What keeps you coming back to it?",
    "Reflect on a book that inspired you or changed your life in some way. What was the book and how did it influence you?"
];

// Initialize question index
let questionIndex = 0;

async function analyzeResponseWithGPT(userResponse, questionAsked) {
    const promptDirectReply = `Is the user's response '${userResponse}' a direct answer to the question '${questionAsked}'? Please respond with 'Yes' or 'No'. If user wants to pass the question then respond with 'Yes'`;
    const responseDirectReply = await chatGPT.ask(promptDirectReply);
    return{responseDirectReply};
}

function startConversation(req, res) {
    questionIndex = 0;
    res.json({ question: staticQuestions[questionIndex] });
}

async function generateResponse(req, res) {
    const { userResponse, questionAsked, questionIndex } = req.body;

    // Check if questions have been asked before
    let nextQuestionIndex = questionIndex ? parseInt(questionIndex) : 0;
    let questionToAsk = questionAsked;

    // Analyze the user response using GPT-3.5
    const responseDirectReplyPromise = analyzeResponseWithGPT(userResponse, questionAsked);
    const responseDirectReply = await responseDirectReplyPromise;

    if (responseDirectReply.responseDirectReply.toLowerCase() === 'yes') {
        const promptEngagingReply = `Reviewing the user's response: '${userResponse}',to the question: "${questionAsked}", Generate a response for an avid reader based on their answer . The response should be engaging and informative, recommending similar books or providing relevant information.(use less than 30 words) Use a friendly tone and tailor the response to the user's input.`;
        const response = await chatGPT.ask(promptEngagingReply);
        nextQuestionIndex++;
        if (nextQuestionIndex < staticQuestions.length - 1) {
            questionToAsk = staticQuestions[nextQuestionIndex];
        }

        res.json({
            question: questionToAsk,
            response,
            questionIndex: nextQuestionIndex
        });
    } else {
        const promptSubquestionCheck = `Assume you are a helpful bot and respond ,Reviewing the user's response: '${userResponse}', to the question: '${questionAsked}'. If the user's response contains any subquestions or clarifications related to the topic of the question, or anything that is not a direct answer to the question asked, generate an answer/question/response to users response. If the user's question does not match the asked question, generate a message saying that the question asked is not related to the question.(use less than 20 words)`;
        const response = await chatGPT.ask(promptSubquestionCheck);
        res.json({
            question: questionToAsk,
            response,
            questionIndex: nextQuestionIndex
        });
    }
}

module.exports = {
    startConversation,
    generateResponse
};