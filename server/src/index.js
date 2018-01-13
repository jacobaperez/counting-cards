import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';

// import router from './routes';
// import './db';

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors({
  allowedHeaders: 'Content-Type,Authorization',
  methods: ['GET, POST, PUT, DELETE, OPTIONS'],
}));

app.use(express.static(path.resolve(__dirname, '../../client/dist')));

// app.use('/api', router);

app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
});

app.listen(port, () => console.log(`rest-server listening on port ${port}`));
