var express = require("express");
var jsx = require("../jsx-engine");
var app = express();

app.engine('jsx', jsx() );
app.set('view engine', 'jsx');

app.get('/', function(req, res){
	res.render('index', {locals: { message: 'Test Message'}});
});

app.listen(3000);