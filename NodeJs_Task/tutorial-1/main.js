const http=require('http');
const port=8000;
const testObj= {
   first:"Valik",
    last:"Kinakh",
    age:17
}


http.createServer((req,res)=>
{
    res.statusCode=404;
    //'Content-type':'text/plain'
    // res.writeHead(res.statusCode,{'Content-type':'text/plain'});
    // res.write("Hello NodeJs_Task");

    //'Content-type':'text/html'
    // res.writeHead(res.statusCode,{'Content-type':'text/html'});
    // res.write(`<h1>Hello NodeJs_Task</h1>`);

    //'Content-type':'application/json'
    if (res.statusCode===200) {
        res.writeHead(res.statusCode, {'Content-type': 'application/json'});
        res.write(JSON.stringify(testObj));
    }else
    {
        res.write(`Not found`);
    }
    res.end();
}).listen(port);

console.log(`Server running at http://localhost:${port}`);