var express = require('express')
var app = express()
var path = require('path');
//var OpenTok = require('opentok'),
//    opentok = new OpenTok(apiKey, apiSecret);

app.set('port', (5000))
/*app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/Landing.html'));
  //__dirname : It will resolve to your project folder.
});*/
app.use(express.static(__dirname + '/public'))
//app.use(express.static(path.join(__dirname, '/public')))


app.get('/landing', function (req, res) {
  res.sendFile(__dirname + '/public/Landing.html');
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
