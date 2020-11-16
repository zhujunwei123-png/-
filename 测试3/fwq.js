var http = require('http');
var fs = require('fs');
var url = require('url');
var server = http.createServer();
server.listen(9999, function () {
  console.log('9999');
})
server.on('request', function (req, res) {
  var urls = url.parse(req.url, true);
  if (urls.pathname == '/') {
    fs.readFile('./index.html', function (err, data) {
      if (!err) {
        res.end(data);
      } else {
        console(err)
      }
    })
  } else {
    fs.readFile('.' + req.url, function (err, data) {
      if (!err) {
        res.end(data)
      } else {
        console.log(err);
      }
    })
  }
})