const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Hello from my own Node.js app!,aditya is the G.O.A.T');
});
server.listen(3000, () => {
    console.log('Server running on port 3000');
});
