const htttp = require('http');
const fs = require('fs');

const server = htttp.createServer((req, res) => {
    res.setHeader('content-type', 'text/html');

    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            path += '/about.html';
            res.statusCode = 301
            break;
        case '/contact-me':
            path += 'contact-me.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
        
    };

    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        };
    });
});

server.listen(8080, 'localhost', () => {
    console.log('Server is running')
});