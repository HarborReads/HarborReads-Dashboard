const axios = require('axios');

class openaiConnection {
    constructor(apiKey, model = 'gpt-3.5-turbo') {
        this.url = 'https://api.openai.com/v1/chat/completions';
        this.model = model;
        this.apiKey = apiKey;
    }

    async ask(prompt) {
        try {
            const response = await axios.post(this.url, {
                model: this.model,
                messages: [{ role: 'user', content: prompt }]
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`
                }
            });
            return response.data.choices[0].message.content;
        } catch (error) {
            throw new Error(`Error communicating with OpenAI API: ${error.message}`);
        }
    }

    async askWithBackoff(prompt, maxRetries = 3, retryDelay = 1000) {
        for (let i = 0; i < maxRetries; i++) {
            try {
                const response = await openaiConnection.ask(prompt);
                return response;
            } catch (error) {
                if (error.response && error.response.status === 429) {
                    console.log("Rate limit exceeded. Retrying after delay...");
                    await new Promise(resolve => setTimeout(resolve, retryDelay));
                    retryDelay *= 2; // Exponential backoff
                } else {
                    throw error;
                }
            }
        }
        throw new Error("Error: Max retries exceeded.");
    }
}

module.exports = openaiConnection;
