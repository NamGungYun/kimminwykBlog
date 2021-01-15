const express = require('express');
const { setFlagsFromString } = require('v8');

const Material = express();
const MyAbout = express();
const Blog = express();

//MyAbout Main express page

MyAbout.use(express.static(__dirname + '/templates/header'));
// /header/css or /header/js include
MyAbout.get('/', function(req, res) {
    res.sendFile(__dirname+'/templates/header/');
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