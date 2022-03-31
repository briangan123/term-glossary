/* eslint-disable no-var */

// addTerm.js
import { PSDB } from 'planetscale-node';


export default async function handler(req, res) {
  // this is making wide sweeping assumptions of the data accuracy
  const { term, definition, context } = req.query;
  var terms = {
    "term": term,
    "definition": definition,
    "context": context
  };
  // this option helps establish a more secure connection object
  const conn = new PSDB('main', {namedPlaceholders: true});
  // INSERT the values that came across into the terms table
  const [dbResult] = await conn.execute(
    `INSERT INTO terms(term, definition, context) VALUES( :term, :definition, :context)`,
    terms
  );
  // take the id that comes back and then apply to the user object
  terms.id = dbResult.insertId
  res.json(terms);
}