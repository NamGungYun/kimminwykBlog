const express = require('express');

const Material = express();

const MyAbout = express();

const Blog = express();

//MyAbout Main express page
MyAbout.get('/', function(req, res) {
    res.send('MyAbout');
});

/* cut */

//Blog express page
Blog.get('/', function(req, res) {
    res.send('Blog');
});

/* cut */

//Material List express page

Material.get('/', function(req, res) {
    res.send('Material');
});

//Blog.use(function(req, res, next) {
//    res.status(404).send('죄송합니다 잘못된겁니다.');
//});

//Blog.get('/:tag/:id', function(req, res) {
//    res.send('tag id');
//});

// node.js script file web server start
Blog.listen(8000, '0.0.0.0');
MyAbout.listen(80, '0.0.0.0');
Material.listen(10000, '0.0.0.0');