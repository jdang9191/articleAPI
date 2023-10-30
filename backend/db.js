const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: "localhost",
    database: "articlePractice",
    password: "kingeasy1125",
    port: 5432
});

module.exports = pool;