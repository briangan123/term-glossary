// db.js

import { PSDB } from 'planetscale-node';

export default async function handler(req, res) {
  // connects to the database
  const conn = new PSDB('main');

  // queries all from terms db
  const [dbResult] = await conn.query('select * from terms');

  // cache
  // @feedback be aware that the 300 here means every 300 seconds this data will be cached / outdated
  // while not critical, if you are allowing adding terms on the front-end via the form, you might
  // want to remove this to reduce confusion as to why the list isn't updating
  // now, the "process this text" endpoint that you still need to make could have
  // much heavier caching and also any endpoint that would only serve up a singular definition
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=300');
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
  res.json(await dbResult);
}