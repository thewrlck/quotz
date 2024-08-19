import express from 'express';
import { scraper } from '@quotz/core';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (_, res) => {
  res.json({ module: "@quotz/api" });
});


app.get('/scraper', async (_, res) => {
  const data = await scraper();
  res.json(data);
});

app.listen(port, () => {
  console.log(`🚀 Api ready at http://localhost:${port}`)
});