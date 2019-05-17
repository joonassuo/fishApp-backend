const express = require('express');

const app = express();


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


// handle POST request
app.post('/fish', (req, res) => {
    console.log(req.body);
    
    /*
    const fish = {
        username : req.body.username,
        fishtype : req.body.fishtype,
        weight : req.body.weight
    }
    console.log(fish);
    */
});
