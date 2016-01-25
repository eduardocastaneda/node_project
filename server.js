var express = require('express');
var app = express();
var exphbs = require('express3-handlebars');
var routes = require('./routes/index');
var about = require('./routes/about');

app.engine('handlebars',
    exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/', routes);
app.use('/om-oss', about);


app.use('/public', express.static('public'));

var port = Number(process.env.PORT || 3000);
app.listen(port);