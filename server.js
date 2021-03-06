var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/app.html');
});

app.get('/slideshow', function (req, res) {
	res.sendFile(__dirname + '/app.html');
});

app.get('/about', function (req, res) {
	res.sendFile(__dirname + '/app.html');
});

app.use('/images', express.static(__dirname + '/images'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/views', express.static(__dirname + '/views'));

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('ipaddr', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");

app.listen(app.get('port'), app.get('ipaddr'), function() {
	console.log('Express server listening on port # ' + app.get('port'));
});