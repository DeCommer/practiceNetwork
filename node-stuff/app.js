const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const url = req.url;

    const method = req.method;

    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>Message Page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
        });
        fs.writeFileSync('test.txt', 'Test message');
        res.statusCode = 302;
        res.setHeader('location', '/');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Home</title></head>');
    res.write('<body><h1>Page sample heading</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);

