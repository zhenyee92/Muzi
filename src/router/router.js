// app.js 或 routes.js
const express = require('express');
const getData = require('./db');  // 导入 db.js 中的函数
const app = express();

app.get('/data', async (req, res) => {
  try {
      const data = await getData();
      res.json(data);
  } catch (err) {
      console.error('Error while getting data', err);
      // Sending error details in JSON format
      res.status(500).json({ error: err.message });
  }
});


