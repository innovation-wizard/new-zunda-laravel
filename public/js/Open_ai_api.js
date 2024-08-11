const axios = require('axios');

const apiKey = process.env.OPENAI_API_KEY;

async function main() {
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: "gpt-3.5-turbo",
                messages: [{ role: "system", content: "You are a helpful assistant." }]
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
            }
        );
        console.log(response.data.choices[0].message.content);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

main();
