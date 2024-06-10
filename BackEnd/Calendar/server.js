const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 6000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// In-memory storage for events
let events = [];

// Routes
app.get('/events', (req, res) => {
  res.json(events);
});

app.post('/events', (req, res) => {
  const newEvent = req.body;
  events.push(newEvent);
  res.status(201).json(newEvent);
});

app.listen(PORT, () => {
  console.log(`Calendar is running on http://localhost:${PORT}`);
});
