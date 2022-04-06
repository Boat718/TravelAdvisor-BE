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
    return new Promise((resolve, reject)=>{
            pg.query(sql, ((err,result) => {
            if(err){
                return reject(err);
            }
            return resolve(result);
        }));
    });
}
    

module.exports = {query};