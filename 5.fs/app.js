const fs = require('fs');

// create a file

fs.writeFile('example.txt', 'this is an example', (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('File successfully created');
        fs.readFile('example.txt', (err, file) => {
            if(err) {
                console.log(err);
            } else {
                console.log(file);
            }
        });
    }
});
