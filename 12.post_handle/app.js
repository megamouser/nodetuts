const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Joi = require('joi');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/', function(req, res) {
    const userDataSchema = Joi.object().keys({
        email: Joi.string().trim().email().required(),
        password: Joi.string().trim().required()
    });

    Joi.validate(req.body.user, userDataSchema, (err, result) => {
        if(err) {
            console.log(err);
            res.send('data posting error');
        } else {
            console.log(result);
            res.send('successfully posted data');
        }
    });

});

app.listen(3000);