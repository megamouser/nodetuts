const fs = require('fs');
fs.appendFile('example.txt', 'some data being appended', (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Successfully appended data to file');
    }
});



