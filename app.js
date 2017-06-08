const express = require('express'),
	  path = require('path'),
	  staticDir = path.join(__dirname, 'pub'),
	  viewsDir = path.join(__dirname, 'views'),
	  now_port = 8800; 


var app = express();

app.set('view engine', 'ejs');
app.set('views');

app.use(express.static(staticDir));

app.get('/', (req, res) => {res.render('index')});

app.listen(now_port, () => {
	console.log('Server started on port '+now_port+'.');
});