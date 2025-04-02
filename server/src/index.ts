import express from 'express';

const app = express();
const port = process.env.PORT || 3001;

app.get('/api/hello', (req, res) => {
  res.send('Hello World! from the Express server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
