import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: "postgres",
    password: "1423",
    host: "localhost",
    port: 5432,
    database: "banners"
})

export default pool;