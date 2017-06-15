var express    =    require('express');
var app        =    express();
var path = require('path');
console.log(__dirname);
require('./app/main')(app);
app.set('views',__dirname + '/../client');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var rootPath = path.normalize(__dirname + '/..');
console.log("ROOT PATH",rootPath);
app.use(express.static(path.join(rootPath, '../client')));

var server     =    app.listen(3000,function(){
    console.log("We have started our server on port 3000");
});