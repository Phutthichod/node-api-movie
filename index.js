const express = require('express');

const app = express();
app.use(express.json());

var movies = [
    {
        id: 0,
        name: "The Flash",
        type: "series",
    },
    {
        id: 1,
        name: "Arrow",
        type: "series",
    },
    {
        id: 2,
        name: "Harry Potter",
        type: "movie",
    }
];


app.get('/api/movies', (req, res) => {
    res.send(movies);
});
app.post('/api/movies', (req, res) => {
    console.log(req.body)
    movies = [...movies,{
        id: movies.length+1,
        name: req.body.name,
        type: req.body.type,
        // isPublished: false
    }]
    res.send(movies);
});

app.delete('/api/movies/:id', (req, res) => {
    movies = movies.filter(item => item.id != req.params.id)
    res.send(movies);
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port${port}...`) );