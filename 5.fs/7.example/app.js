const fs = require('fs');

fs.unlink('tutorial/example.txt', (err) => {
    if(err) {
        console.log(err);
    } else {
        fs.rmdir('tutorial', (err) => {
            if(err) {
                console.log(err);
            } else {
                console.log('deleted folder');
            }
        });
    }
});
