const express = require('express');
const app = express();

module.exports = app

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        000-000-0000
      </body>
    </html>
  `)
})