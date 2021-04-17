const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello world form NodeJS server');
});
server.timeout=20000;
server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});