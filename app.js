const express = require('express')
const hostname = '192.168.12.74'
const port = 21274

const app = express()

app.get( '/', (req, res) => {
    res.send('Node ddd')
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 
