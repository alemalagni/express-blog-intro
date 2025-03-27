const express = require('express')
const app = express()
const port = 3000

app.use( express.static( 'public' ) );

const post = [
    {
    titolo: "titolo 1",
    contenuto: "contenuto 1",
    immagine: "images/ciambellone.jpeg",
    tags: ["tag 1"]
    },
    {
    titolo: "titolo 2",
    contenuto: "contenuto 2",
    immagine: "images/cracker_barbabietola.jpeg",
    tags: ["tag 2"]
    },
    {
    titolo: "titolo 3",
    contenuto: "contenuto 3",
    immagine: "images/pane_fritto_dolce.jpeg",
    tags: ["tag 3"]
    },
    {
    titolo: "titolo 4",
    contenuto: "contenuto 4",
    immagine: "pasta_barbabietola.jpeg",
    tags: ["tag 4"]
    },
    {
    titolo: "titolo 5",
    contenuto: "contenuto 5",
    immagine: "images/torta_paesana.jpeg",
    tags: ["tag 5"]
    }
];

function showTags(num) {
    for ( let i = 0; i < post[num].tags.length; i++ ){
        return post[num].tags[i];
    }
}

app.get( '/', (req, res) => {
    res.type("html")
        .send( `<p>Server del mio blog</p>` )
})

app.get( '/bacheca', (req, res) => {
    const num = parseInt(Math.random() * 5);

    res.type("html")
        .send( `
                <h3>${post[num].titolo}</h3>
                <div><img src="${post[num].immagine}"></div>
                <p>${showTags(num)}</p>
                <p>${post[num].contenuto}</p>
                ` )
})

app.listen( port, () => {
    console.log( `Example app listening on port ${port}` )
})