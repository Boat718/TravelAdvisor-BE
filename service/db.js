const {Client} = require("pg");
const dbConfig = require('../config/dbConfig');

const pg = new Client(dbConfig.db);

pg.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected server');
});

async function query(sql,values) {
    try {
        const res = await pg.query(sql,values);
        // console.log(res.rows);
        return res.rows;
    } catch (error) {
        console.log(error.stack);
    }
}
    

module.exports = {query};