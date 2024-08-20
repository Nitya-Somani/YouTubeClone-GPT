const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();

// Enable compression middleware
app.use(compression());

// Serve static files with Brotli support
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.br';
  res.set('Content-Encoding', 'br');
  res.set('Content-Type', 'application/javascript');
  next();
});

app.get('*.css', (req, res, next) => {
  req.url = req.url + '.br';
  res.set('Content-Encoding', 'br');
  res.set('Content-Type', 'text/css');
  next();
});

app.use(express.static(path.join(__dirname, 'build')));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
