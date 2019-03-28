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
    console.log(path.join(__dirname, 'static', 'index.html'));
    console.log(path.join(__dirname, 'node_modules', 'bootstrap', 'dist'));
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (req, res) => {
    
    console.log(_.map(req.body, 'name'));

    // const schema = Joi.object().keys({
    //     email: Joi.string().trim().email().required(),
    //     password: Joi.string().min(5).max(10).required()
    // });

    // Joi.validate({ email: 'art@kompr.ru', password: 'hero1181' }, schema, (err, result) => {
    //     if(err) {
    //         console.log(err);
    //         res.send('an error has error'); 
    //     }
    //     console.log(result);
    //     res.send('successfully posted data');
    // });

    /*
    const schema = Joi.object().keys({
        email: Joi.string().trim().email(),
        password: Joi.string().min(5).max(10)
    });

    Joi.validate(req.body, schema, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
    */
});

app.listen(3000);
