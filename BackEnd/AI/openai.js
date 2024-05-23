const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/chat/ai', async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
        const response = await axios.post(
            'https://api-inference.huggingface.co/models/gpt2',
            {
                inputs: prompt,
                parameters: {
                    max_length: 100,
                },
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
                },
            }
        );

        
        console.log('Hugging Face API response:', response.data);

        if (response.data && Array.isArray(response.data) && response.data.length > 0 && response.data[0].generated_text) {
            res.json({ response: response.data[0].generated_text.trim() });
        } else {
            throw new Error('Unexpected response format');
        }
    } catch (error) {
        console.error('Error fetching response from Hugging Face API:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to fetch response from Hugging Face API' });
    }
});

app.listen(port, () => {
    console.log(`AI is running on port ${port}`);
});
