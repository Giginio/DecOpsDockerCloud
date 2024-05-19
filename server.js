'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

// Counter
let counter = 0;

// Serve static files from the public directory
app.use(express.static('public'));

// Route to get the current counter value
app.get('/counter', (req, res) => {
    res.json({ counter });
});

// Route to increment the counter
app.post('/increment', (req, res) => {
    counter++;
    res.json({ counter });
});

// Default route to serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
