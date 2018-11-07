const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

const server = http.createServer(function(req, res) {
    let filename = req.headers.filename;
    console.log('file requestid :', filename);

    req
        //.pipe(zlib.createUnzip())
        .pipe(fs.createWriteStream(filename))
        .on('finish', function() {
            res.writeHead(201,{'Content-Type': 'text/plain'});
            res.end('That\'s it\n');
            console.log('file saved: ' + filename);
        });
});

server.listen(3000,function() {
    console.log('Listening: 3000');
});