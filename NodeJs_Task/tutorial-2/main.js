const http = require('http');
const path = require('path');
const fs = require("fs");
const readData = require('./readData');
const apple = require('./apple_stock');
const tesla = require('./tesla_stock');
const logger = require('./logger');
const port = 3030;

readData();
http.createServer((req, res) => {
    res.statusCode = 200;
    let text;
    switch (req.url) {
        case '/apple_stock/buy':
            text = apple('buy');
            logger(true);
            break;
        case '/apple_stock/sell':
            text = apple('sell');
            logger(true);
            break;
        case '/tesla_stock/buy':
            text = tesla('buy');
            logger(true);
            break;
        case '/tesla_stock/sell':
            text = tesla('sell');
            logger(true);
            break;
        default:
            text = "You have not bought anything!";
            logger(false);
            break
    }
    res.end(text);
}).listen(port);

console.log(`Server running at http://localhost:${port}`);