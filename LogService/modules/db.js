const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
});

exports.insertLog = async ({ method, url, startTime, endTime, status }) => {
    const query = `
    INSERT INTO log.logs (method, url, start_time, end_time, status)
    VALUES ($1, $2, $3, $4, $5)
  `;

    try {
        await pool.query(query, [method, url, startTime, endTime, status]);
    } catch (error) {
        console.error('DB insert failed:', error.message);
        throw error;
    }
};
