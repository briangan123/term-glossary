/* eslint-disable no-var */
import { PSDB } from 'planetscale-node';

export default async function handler(req, res) {

    // gets the info from the request
    const { id } = req.query;
    // stores the info into a json so that it can be read into sql execution
    var terms = {
        "id" : id
    };

    // connects to db on planetscale
    const conn = new PSDB('main', {namedPlaceholders: true});  


    // sql query
    const [dbResult] = await conn.execute(
        `DELETE FROM terms WHERE id =  :id`, terms
    );
    
    // responds with 200 sucess code if sucessfull
    res.json(await dbResult);

}