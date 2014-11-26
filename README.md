# React.js Views with Express
**EXPERIMENTAL**

Use JSX Views with Express.

TODO: Remove `node-jsx` as a dependency and use `fs` and `react-tools` directly

## Usage
```
var express = require("express");
var jsx = require("../jsx-engine");
var app = express();

app.engine('jsx', jsx() );
app.set('view engine', 'jsx');

app.get('/', function(req, res){
	res.render('index', {locals: { message: 'Test Message'}});
});
```
