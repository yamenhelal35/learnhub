require('dotenv').config(); // Load environment variables from .env file

const config = {
    openaiApiKey: process.env.OPENAI_API_KEY,
};

module.exports = config;
