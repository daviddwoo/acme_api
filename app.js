const express = require('express');
const app = express();
const { models: { Product }} = require('./db');
const cors = require('cors');

app.use(cors())

module.exports = app

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        The Acme API
      </body>
    </html>
  `)
})

app.get('/api/products', async(req, res, next) => {
  try {
    res.send(await Product.findAll())
  }
  catch(ex) {
    next(ex)
  }
})