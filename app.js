const express = require('express');
const path = require('path');
const _ = require('lodash');
const Joi = require('joi');
const bodyParser = require('body-parser');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use('/public', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist')));

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));    
});

app.get('/:userQuery', (req, res) => {
    res.render('index', {
            data: {
                userQuery: req.params.userQuery, 
                searchResults: ['book1', 'book2', 'book3'],
                loggedIn: true,
                username: 'megamouser'
        }
    });
});

app.post('/', (req, res) => {
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
