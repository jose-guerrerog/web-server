const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath)); //customize your server

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
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
        title: 'Help',
        name: 'Jose Guerrero'
    });
});

app.get('/weather', (req, res) => {
    res.send([{
        forecast: 'It is snowing',
        location: 'Philadelphia'
    }]);
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Help article not found',
        name: 'Jose Guerrero'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Page not found',
        name: 'Jose Guerrero'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});
