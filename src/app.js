const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.send('Hello express!');
});

app.get('/help', (req, res) => {
    /*
    res.send({
        name: 'Andrew',
        age: 27
    });*/
    res.send([{
        name: 'Andrew',
    },{
        name: 'Do not know',
    }])
});

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>');
});

app.get('/weather', (req, res) => {
    res.send([{
        forecast: 'It is snowing',
        location: 'Philadelphia'
    }]);
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});
