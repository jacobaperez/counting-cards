const env = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.use(cors({
  allowedHeaders: 'Content-Type, Authorization',
  methods: ['GET, POST, PUT, DELETE, OPTIONS']
}));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// app.use('/', router)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
