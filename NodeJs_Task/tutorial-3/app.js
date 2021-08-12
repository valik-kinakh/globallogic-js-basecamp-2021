const http=require('http');

const restApi=require('./restApi');
const staticFile=require('./staticFile');
const {CONTENT_TYPES}=require('./contentTypes');

const port=3030;
http.createServer(((req, res) => {
    if (req.url.startsWith('/static/')) {
      staticFile(req, res);
    } else if (req.url.startsWith('/api')) {
        restApi(req, res);
    } else if (req.url === '/') {
        res.writeHead(302, { 'Location': '/static/index.html'});
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': CONTENT_TYPES['.json']});
        res.end(JSON.stringify({
            status: 404,
            error: 'Not Found',
        }));
    }
})).listen(port,()=>console.log(`Server started on: http://localhost:${port}`))