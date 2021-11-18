// const http = require('http')

// const server = http.createServer((req, res) => {

//     res.statusCode = 200
//     res.setHeader("Content-Type", "text/plain")
//     res.send('this is text')

// })

// server.listen(3000,'127.0.0.1' ,() => {
//     console.log('server is running')
// })

const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  const fileHtml = fs.readFileSync('index.html');
  res.writeHead(200, { ContentType: 'text/html' });
  res.end(fileHtml);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
