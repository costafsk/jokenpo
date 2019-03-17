const express = require('express');
const app = express();
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const minifyHTML = require('express-minify-html');

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static('public'));

app.use(minifyHTML({
    override:      true,
    exception_url: false,
    htmlMinifier: {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: true,
        removeEmptyAttributes: true,
        minifyJS: true
    }
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressValidator());

consign()
    .include('app/routes')
    .then('app/controllers')
    .into(app);

module.exports = app;