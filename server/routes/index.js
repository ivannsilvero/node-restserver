const express = require('express');
const app = express();
const path = require('path');

const hbs = require('hbs');

hbs.registerPartials(path.join(__dirname, "../../", "/views/parciales"));
app.use(express.static(path.join(__dirname , "../../" , "/public")));
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Iván'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/administrador', (req, res) =>{
    res.render('administrador');
});

app.get('/redactar', (req, res) => {
    res.render('redactar');
});

module.exports = app;