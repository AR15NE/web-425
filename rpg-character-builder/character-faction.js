const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes

const characterFaction = [
  { name: 'Faction 1' },
  { name: 'Faction 2' },
  { name: 'Faction 3' }
];

app.get('/api/character-faction', (req, res) => { // Singular endpoint
  res.json(characterFaction);
});

app.listen(port, () => {
  console.log(`Character Faction API running at http://localhost:${port}`);
});
