import express, { Request } from 'express';
import { Db, db, saveQuotes, scraper } from '@quotz/core';
import { searchQuotes } from '@quotz/core';

let scraped = false;

let _db: Db;
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (_, res) => {
  res.json({ module: "@quotz/api" });
});

app.get('/search', async (req: Request<never, any, never, { q: string }>, res) => {
  const quotes = await searchQuotes(req.query.q, _db);
  res.json(quotes);
});

app.get('/quotes', async (_, res) => {
  if (scraped) return res.status(400).json({ message: "Quotes already scraped" });
  const quotes = await scraper();
  const ref = await saveQuotes(quotes, _db);
  scraped = true;
  res.json(ref);
});

app.listen(port, async () => {
  _db = await db();
  console.log(`🚀 Api ready at http://localhost:${port}`)
});