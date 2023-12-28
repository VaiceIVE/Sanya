import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: "postgres",
    password: "1423",
    host: "178.170.192.87",
    port: 5432,
    database: "banners"
})

export default pool;