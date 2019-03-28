const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use('/public', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log(path.join(__dirname, 'static', 'index.html'));
    console.log(path.join(__dirname, 'node_modules', 'bootstrap', 'dist'));
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (req, res) => {
    console.log(req.body);
    // some database call here

    res.json({success: true});
});

app.listen(3000);
