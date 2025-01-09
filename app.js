const express = require('express')
const port = 21274

const app = express()

app.get( '/', (req, res) => {
    res.send('Node ddd')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 
