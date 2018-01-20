var express = require('express')
var app = express()
var path = require('path');
//var OpenTok = require('opentok'),
//    opentok = new OpenTok(apiKey, apiSecret);


app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/test.html'))

/*app.get('/page2', function(request, response) {
  //response.send("Hello You!");
  response.sendFile(__dirname + '/public/index.html');
})
/*app.get('/', function (req, res) {
*/
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
