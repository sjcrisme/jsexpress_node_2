const fs = require('fs');
const zlib = require('zlib');
const http = require('http');

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'POST',
    headers: {
        filename: 'data.txt',
        'Content-Type': 'application/ostet-stream',
        'Content-Encoding': 'gzip'
    }
};

let req = http.request(options, function(res) {
    console.log('Server response: ' + res.statusCode);
});

fs.createReadStream('input_data.txt')
    .pipe(zlib.createGzip())
    .pipe(req)
    .on('finish', function() {
        console.log('File successfull sent');
    });