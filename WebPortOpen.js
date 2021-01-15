const express = require('express');
var moment = require('moment'); 
var MySQLCnt = require('./MySQLCnt');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

const Material = express();
const MyAbout = express();
const Blog = express();

//MyAbout Main express page

// /header/css or /header/js include
MyAbout.use(express.static(__dirname + '/templates/header/css'));
MyAbout.use(express.static(__dirname + '/templates/header/js'));
MyAbout.get('/', function(req, res) {

    var address = '112.154.52.10';

    MySQLCnt.AddressCheck('112.154.52.10');

    var DateTime = moment().format('YYYY-MM-DD HH:mm:ss');

    const log = "["+address+"] GET / "+DateTime;
    console.log(log);

    res.sendFile(__dirname+'/templates/header/index.html');
}); 

//Blog express page
Blog.get('/', function(req, res) {
    res.send('Blog');
});

//Material List express page

Material.get('/', function(req, res) {
    res.send('Material');
});

//Blog.use(function(req, res, next) {
//    res.status(404).send('HTTP Request Response Status Code 404');
//});

//Blog.get('/:tag/:id', function(req, res) {
//    res.send('tag id');
//});

// node.js script file web server start
Material.listen(10000, '0.0.0.0');// 10000 port
Blog.listen(8000, '0.0.0.0');//8080 port
MyAbout.listen(80, '0.0.0.0');// 80 port