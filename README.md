# React.js Views with Express
**EXPERIMENTAL**

Use JSX Views with Express.

## Usage
```
var express = require("express");
var jsx = require("reactjs-express-views");
var app = express();

app.engine('jsx', jsx() );
app.set('view engine', 'jsx');

app.get('/', function(req, res){
	res.render('index', {locals: { message: 'Test Message'}});
});
```
