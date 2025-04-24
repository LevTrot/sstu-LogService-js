const express = require('express');
const router = express.Router();
const { insertLog } = require('./db');

router.post('/', async (req, res) => {
    const { method, url, startTime, endTime, status } = req.body;

    if (!method || !url || !startTime || !endTime || typeof status !== 'number') {
        return res.status(400).json({ message: 'Invalid log data' });
    }

    try {
        await insertLog({ method, url, startTime, endTime, status });
        res.status(200).json({ message: 'Log saved' });
    } catch (err) {
        console.error('Error saving log:', err.message);
        res.status(500).json({ message: 'Error saving log' });
    }
});

module.exports = router;
