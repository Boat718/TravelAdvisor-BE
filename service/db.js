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

function query(sql) {
    try {
        const res = await pg.query(sql);
        return res.rows[0];
    } catch (error) {
        console.log(error.stack);
    }
}
    

module.exports = {query};