const path = require('path');
const fs = require('fs');
const fsPromises = require('fs/promises');

const {CONTENT_TYPES} = require('./contentTypes');

function staticFile(req, res) {
    fsPromises.stat(path.join(__dirname, req.url))
        .then(file => {
            if (file.isFile())
            {
                const ext = path.extname(req.url);
                res.writeHead(200, { 'Content-Type': CONTENT_TYPES[ext] });

                fs.createReadStream(path.join(__dirname, req.url)).pipe(res);
            }else{
                res.writeHead(200, { 'Content-Type': CONTENT_TYPES['.json'] });
                res.end(JSON.stringify({
                    status: 200,
                    data: 'Directory',
                }));
            }
        })
        .catch(err=>
        {
            console.log(err);
            res.writeHead(404, { 'Content-Type': CONTENT_TYPES['.json'] });
            res.end(JSON.stringify({
                status: 404,
                error: err.code,
            }));
        });

}

module.exports=staticFile;