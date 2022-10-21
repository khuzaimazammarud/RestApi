const express = require('express')
require('../src/db/conn')
const mensRanking = require('../src/models/mens');
const app = express()
const router = require('../src/routers/rank');
const port = process.env.PORT || 3000

app.use(express.json())
app.use(router)

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})