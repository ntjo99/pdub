const http = require('http');
const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const uploadDir = path.join(__dirname, 'public', 'uploads');
fs.mkdirSync(uploadDir, { recursive: true });

function serveStaticFile(res, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end('Not found');
    } else {
      res.end(data);
    }
  });
}

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/upload') {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', () => {
      try {
        const { filename, data } = JSON.parse(body);
        const base64 = data.replace(/^data:image\/\w+;base64,/, '');
        const buffer = Buffer.from(base64, 'base64');
        const name = Date.now() + '-' + filename;
        fs.writeFile(path.join(uploadDir, name), buffer, err => {
          if (err) {
            res.statusCode = 500;
            return res.end('Error saving file');
          }
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ url: `/uploads/${name}` }));
        });
      } catch (e) {
        res.statusCode = 400;
        res.end('Invalid data');
      }
    });
  } else if (req.url.startsWith('/uploads/')) {
    const filePath = path.join(__dirname, 'public', req.url);
    serveStaticFile(res, filePath);
  } else {
    const file = req.url === '/' ? 'index.html' : req.url;
    const filePath = path.join(distDir, file);
    serveStaticFile(res, filePath);
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
