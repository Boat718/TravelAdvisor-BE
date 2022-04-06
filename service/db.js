const mysql = require('mysql2');
const dbConfig = require('../config/dbConfig');

const connection = mysql.createConnection(dbConfig.db);
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected server');
});

function query(sql) {
    return new Promise((resolve, reject)=>{
        connection.query(sql, ((err,result) => {
            if(err){
                return reject(err);
            }
            return resolve(result);
        }));
    });
}
    

module.exports = {query};