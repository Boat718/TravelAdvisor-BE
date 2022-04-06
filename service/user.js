const db = require('./db');

async function addUser(username, email, password) {
    db.query( 'INSERT INTO traveladvisor (username, email, password) VALUES ($1, $2, $3);',[username, email, password]);
}

async function getUser() {
    return db.query('SELECT * FROM traveladvisor ;');
}

async function loginUser(username) {
    return db.query('SELECT * FROM traveladvisor WHERE username = $1 ;',[username]);
}


module.exports = {
    addUser,
    getUser,
    loginUser
}