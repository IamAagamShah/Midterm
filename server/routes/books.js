// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const { title } = require('process');

// define the book model
let book = require('../models/books');

/* GET books List page. READ */
router.get('/books', (req, res, next) => {


  book.find((err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/index', {
        title: 'Books',
        books: ''
      });
    }
  });

});

//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {
  res.render('books/details', { title: 'Add new book' });
});

/*****************
 * ADD CODE HERE *
 *****************/



// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {

});
/*****************
 * ADD CODE HERE *
 *****************/



// GET the Book Details page in order to edit an existing Book
router.get('/:id', (req, res, next) => {

  /*****************
   * ADD CODE HERE *
   *****************/
});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {

  /*****************
   * ADD CODE HERE *
   *****************/

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

  /*****************
   * ADD CODE HERE *
   *****************/
});


module.exports = router;
