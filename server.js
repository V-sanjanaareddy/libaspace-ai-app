const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// Optional friendly homepage
app.get("/", (req, res) => {
  res.send("Libaspace AI Backend is running! POST /speak to interact with the avatar.");
});

// The POST endpoint for the AI avatar
app.post('/speak', (req, res) => {
  const { text } = req.body;
  // Here you would call the Tavus / AI avatar API
  res.json({ message: 'Avatar speaking', text });
});

// Start the backend server
app.listen(4000, () => console.log('Backend running on http://localhost:4000'));
