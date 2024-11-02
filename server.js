const express = require('express');
const app = express();
const PORT = 3000;

// Sample historical data
const historicalEvents = {
    "2023-11-01": { description: "Sample historical event on November 1, 2023." },
    "1969-07-20": { description: "Apollo 11 lands on the Moon." },
    "1776-07-04": { description: "Declaration of Independence was signed." }
};

// Serve static files from "public" directory
app.use(express.static('public'));

// API to fetch historical event
app.get('/historical-event', (req, res) => {
    const date = req.query.date;
    const event = historicalEvents[date] || { description: "No historical event found for this date." };
    res.json(event);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

