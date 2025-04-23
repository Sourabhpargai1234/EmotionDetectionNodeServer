// dev.js (for local testing only)
const express = require('express');
const app = express();

app.use(express.static('public'));

const PORT = process.env.PORT || 5000;

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Server is healthy 🚀' });
});

app.listen(PORT, () => {
    console.log(`Server running locally at http://localhost:${PORT}`);
});
