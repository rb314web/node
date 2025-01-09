const express = require('express')
const port = 21274

const app = express()

app.get( '/', (req, res) => {
    res.send('Node ddd')
})

app.listen(port)
