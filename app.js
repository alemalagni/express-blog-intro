const express = require('express')
const app = express()
const port = 3000

app.get( '/', (req, res) => {
    res.type("html")
        .send( `<p>Server del mio blog</p>` )
})

app.listen( port, () => {
    console.log( `Example app listening on port ${port}`)
})