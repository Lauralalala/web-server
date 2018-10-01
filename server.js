const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('Hola caracola')
})
app.listen(3000)
