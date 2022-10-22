// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET Book page. wildcard */
router.get('/books', (req, res, next) => {
  res.render('books/index', {
    title: 'Books',
    books: ''
  });
});

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
  });
});

module.exports = router;
