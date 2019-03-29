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

app.get('/', (req, res) => {
    //console.log(path.join(__dirname, 'static', 'index.html'));
    //console.log(path.join(__dirname, 'node_modules', 'bootstrap', 'dist'));
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (req, res) => {
    let keys = _.map(req.body, 'name');
    let values = _.map(req.body, 'value');
    let requestData = Object.assign({}, ...keys.map((n, index) => ({[n]: values[index]})));

    const schema = Joi.object().keys({
        email: Joi.string().trim().email().required(),
        password: Joi.string().min(5).max(10).required()
    });

    Joi.validate(requestData, schema, (err, result) => {
        if(err) {
            console.log(err);
            res.send('data posting error'); 
        }
        console.log(result);
        res.send('successfully posted data');
    }); 
});

app.listen(3000);
