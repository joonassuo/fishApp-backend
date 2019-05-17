const express = require('express');
const cors = require('cors');
const monk = require('monk');

const db = monk('localhost/fisher-app');
const fishDB = db.get('fishDB');

const app = express();
app.use(cors());
app.use(express.json());


// server listen on 5000
app.listen('5000', () => {
    console.log('LISTENING ON 5000');
});


// handle GET request
app.get('/', (req, res) => {
    res.json({
        'message' : 'GET IS WORKING'
    });
});


// GET the fishDB
app.get('/fishDB', (req, res) => {
    fishDB
        .find()
        .then(fishDB => {
            res.json(fishDB);
        });
});


// handle POST request
app.post('/fish', (req, res) => {
    // ....validate the data first, then:

    const fish = {
        username : req.body.username,
        fishtype : req.body.fishtype,
        weight : req.body.weight
    }
    console.log(fish);

    fishDB
        .insert(fish)
        .then(createdFish => {
            res.json(createdFish);
        });
});
