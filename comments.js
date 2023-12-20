// Create web server
// Start server: node comments.js
// Load in browser: http://localhost:8080
// Stop server: Ctrl+C

var http = require('http');
var fs = require('fs');
var url = require('url');

var comments = [];

var server = http.createServer(function(request, response) {
    var parsedUrl = url.parse(request.url, true);
    var pathname = parsedUrl.pathname;
    var query = parsedUrl.query;
    // console.log("parsedUrl=", parsedUrl);
    // console.log("pathname=", pathname);
    // console.log("query=", query);
    if (pathname === '/') {
        fs.readFile('./index.html', 'utf-8', function(err, data) {
            if (err) {
                response.end('404 Not Found');
            } else {
                var commentList = comments.map(function(item) {
                    return '<li>' + item + '</li>';
                }).join('');
                data = data.replace('messageList', commentList);
                response.end(data);
            }
        });
    } else if (pathname === '/add') {
        // console.log(query.message);
        comments.push(query.message);
        // console.log(comments);
        // response.end(query.message);
        response.statusCode = 302;
        response.setHeader('Location', '/');
        response.end();
    } else {
        fs.readFile('.' + pathname, 'utf-8', function(err, data) {
            if (err) {
                response.end('404 Not Found');
            } else {
                response.end(data);
            }
        });
    }
});

server.listen(8080, function() {
    console.log('Server is running...');
});