const http = require('http');
const fs = require('fs');

let port = 3000;

http.createServer(function(req, res) {
  const url = req.url;
  if (url !== "/favicon.ico") {
    console.log(url);
    if (url === "/" || url.slice(1) === "index.html") {
      file = "index.html";
    } else if (url.slice(1) === "about.html") {
      file = "about.html";
    } else if (url.slice(1) === "contact-me.html") {
      file = "contact-me.html";
    } else {
      file = "404.html";
    }
    
    fs.readFile(file, function(err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }

}).listen(port); 