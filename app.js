const express = require('express')
const port = 80

const app = express()

app.get( '/', (req, res) => {
    res.send('Node ddd')
})

app.listen(port)