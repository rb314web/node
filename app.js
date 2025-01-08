const express = require('express')
const port = 41274

const app = express()

app.get( '/', (req, res) => {
    res.send('Node ddd')
})

app.listen(port)