function readData() {
    const fs = require('fs');

    fs.readFile("BTC.txt", 'utf8', ((err, data) => {
        if (err) {
            console.error(err);
        }
        console.log(data);
    }))

    fs.readFile("ETH.txt", 'utf8', ((err, data) => {
        if (err) {
            console.error(err);
        }
        console.log(data);
    }))
}

module.exports = readData;
