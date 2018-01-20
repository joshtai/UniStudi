var express = require('express')
var app = express()
var path = require('path');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/page2', function(request, response) {
  //response.send("Hello You!");
  //response.sendFile(__dirname + '/test.html');
})
/*app.get('/', function (req, res) {
*/
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
