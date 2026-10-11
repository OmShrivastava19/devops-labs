const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('index.html not found');
        } else {
            res.end(data);
        }
    });
});

const port = process.env.PORT || 8080;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
