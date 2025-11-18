const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('');
});
app.get('/health', (req, res) => {
  res.send('Backend is running');
});
app.get('/api/greeting', (req, res) => {
  res.json({ message: 'Hello from greetingsAPI ' });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
