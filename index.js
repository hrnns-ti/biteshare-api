const express = require('express');
const env = require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const contactRouter = require('./src/routes/contact.route')

app.get('/api', (req, res) => {
  res.json({status: 'Server is healthy :D'})
});

app.use('/api/contact', contactRouter)

app.listen(port, () => {
  console.log(`\nServer running in localhost:${port}`);
});