const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

let ideas = [];

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/ideas', (req, res) => {
  res.json({ ideas });
});

app.post('/api/ideas', (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const idea = { id: ideas.length + 1, title, description };
  ideas.push(idea);
  res.status(201).json({ idea });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
