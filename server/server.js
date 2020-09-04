const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require("path")

const mysql = require('mysql');

require('../hbs/helpers');

const port = process.env.PORT || 3000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'admin123',
    database: 'eestn5'
});

connection.connect(() => {
    console.log(`MySQL en linea`);
});

connection.query('SELECT 1+1 AS solution', (err, results, fields) => {
    if(err) throw error;
    console.log(results[0].solution);
});

connection.end();

hbs.registerPartials(path.join(__dirname, "../", "/views/partials"));
app.use(express.static(path.join(__dirname , "../" , "/public")));

app.set('view engine', 'hbs');

app.use(require('./routes/index'));

app.listen(port, () => {
    console.log(__dirname + '/views/parciales/');
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});