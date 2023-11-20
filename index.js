const htttp = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = htttp.createServer((req, res) => {
    
});

server.listen(8080, 'localhost', () => {
    console.log('Server is running')
});