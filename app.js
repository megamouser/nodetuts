const express = require('express');
const path = require('path');
const _ = require('lodash');
const Joi = require('joi');
const bodyParser = require('body-parser');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use('/public', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.set('view engine', 'ejs');

//app.get('/:userQuery', (req, res) => {
    //console.log(path.join(__dirname, 'static', 'index.html'));
    //console.log(path.join(__dirname, 'node_modules', 'bootstrap', 'dist'));
    //res.sendFile(path.join(__dirname, 'static', 'index.html'));
    //res.render('index', { data:  { userQuery: req.params.userQuery, searchResults: ['book1', 'book2', 'book3'] }});
//});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));    
});

app.post('/', (req, res) => {
    //console.log(req.body);
    // let keys = _.map(req.body, 'name');
    // let values = _.map(req.body, 'value');
    // let requestData = Object.assign({}, ...keys.map((n, index) => ({[n]: values[index]})));

    const schema = Joi.object().keys({
        email: Joi.string().trim().email().required(),
        password: Joi.string().min(5).max(10).required(),
        checkbox: Joi.string()
    });

    Joi.validate(req.body, schema, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            console.log(result);
        }
    }); 
});

app.listen(3000);
