const fs = require('fs');
const readStream = fs.createReadStream('example.txt');
readStream.on('data', (chunk) => {
    console.log(chunk);
});


