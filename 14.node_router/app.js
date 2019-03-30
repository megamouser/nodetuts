const express = require('express');
const path = require('path');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));

const web = require('./routes/web');

app.use('/web', web);

app.listen(3000);