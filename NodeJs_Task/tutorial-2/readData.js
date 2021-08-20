const fs = require('fs');

function readData() {

  const print = (err, data, name) => {
    if (err) {
      console.error(err);
    }
    writeData(data, name);
    console.log(data);
  };

  fs.readFile('BTC.txt', 'utf8', (err, data) => print(err, data, 'Info_BTC.txt'));

  fs.readFile('ETH.txt', 'utf8', (err, data) => print(err, data, 'Info_ETH.txt'));

}

function writeData(data, name) {
  fs.writeFile(name, data, (err) => {
    if (err)
      console.log(err);
  });
}

module.exports = readData;