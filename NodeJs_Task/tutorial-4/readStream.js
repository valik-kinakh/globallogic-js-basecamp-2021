const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const zip = zlib.createGzip();

function readStream() {
  const filePath = path.join(__dirname, 'readText.txt');
  const outPath = path.join(__dirname, 'writeText.txt');
  const archivePath = path.join(__dirname, 'archive.gz');

  const myReadableStream = fs.createReadStream(filePath, 'utf8');
  const myArchiveStream = fs.createWriteStream(archivePath);
  const myWriteToFile = fs.createWriteStream(outPath);


  myReadableStream.on('data', function(chunk) {
    console.log('chunk of data received:');
    console.log(chunk);
  });

  setImmediate(() => {
    myReadableStream
      .pipe(zip)
      .pipe(myArchiveStream)
      .on('finish', () => console.log('done compressing'));
  });

  setTimeout(() => {
    myReadableStream
      .pipe(myWriteToFile)
      .on('finish', () => console.log('done writing'));
  }, 0);
}

module.exports = readStream;
