const http = require('http');
const port = 8000;
const testObj = {
  first: 'Valik',
  last: 'Kinakh',
  age: 18
};


http.createServer((req, res) => {
  res.statusCode = 200;
  let contentType = 'json';

  if (res.statusCode === 200) {
    switch (contentType) {
      case  'text':
        res.writeHead(res.statusCode, { 'Content-type': 'text/plain' });
        res.write('Hello NodeJs_Task');
        break;
      case 'html':
        res.writeHead(res.statusCode, { 'Content-type': 'text/html' });
        res.write(`<h1>Hello NodeJs Task</h1>`);
        break;
      case  'json':
        res.writeHead(res.statusCode, { 'Content-type': 'application/json' });
        res.write(JSON.stringify(testObj));
        break;
      default:
        res.write('Not found');
        break;
    }
  } else {
    res.write('Not found');
  }


  res.end();
}).listen(port);

console.log(`Server running at http://localhost:${port}`);