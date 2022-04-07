const config = {
    db: {
        // connectionString: process.env.DATABASE_URL,
        // ssl: {
        // rejectUnauthorized: false
        // }
        user:"postgres",
        host:"localhost",
        database:"travel",
        password:"password",
        port:5432
    }
};

module.exports = config;