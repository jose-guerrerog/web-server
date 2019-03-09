const path = require('path');
const express = require('express');

console.log(__dirname);
console.log(path.join(__dirname, '../public'));

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath)); //customize your server

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Jose Guerrero',
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Jose Guerrero',
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'Chau chau',
    });
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
