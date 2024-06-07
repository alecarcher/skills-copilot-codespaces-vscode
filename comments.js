// Create web server and listen on port 8080
// Create a http server
var http = require('http');
var fs = require('fs');
var path = require('path');

// Include the module
var comment = require('./comments');

// Create server and listen on port 8080
http.createServer(function(req, res) {
  // Set the content type to html
  res.writeHead(200, {'Content-Type': 'text/html'});
  // Read the file
  fs.readFile(path.join(__dirname, 'comment.html'), function(err, data) {
    if (err) {
      res.write('Error: ' + err);
    } else {
      res.write(data);
    }
    res.end();
  });
}).listen(8080);

// Call the function to write comments
comment.writeComments();
console.log('Server running at http://');