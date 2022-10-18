const express = require('express');
const mainController = require('../controllers/main');
const router = express.Router();
//const validaciones = require('../middlewares/validaciones'); me tira errror
const validationBooks = require('../middlewares/validationBooks')

router.get('/', mainController.home);
router.get('/books/detail/:id', mainController.bookDetail);
router.get('/books/search', mainController.bookSearch);
router.post('/books/search', mainController.bookSearchResult);
router.get('/authors', mainController.authors);
router.get('/authors/:id/books', mainController.authorBooks);
router.get('/users/register', mainController.register);
router.post('/users/register', mainController.processRegister);
router.get('/users/login', mainController.login);
router.post('/users/login', mainController.processLogin);
router.delete('/books/:id', mainController.deleteBook);
router.get('/books/edit/:id', mainController.edit);
router.put('/books/edit/:id', mainController.processEdit);
//router.put('/users/logout', mainController.logout);
//router.put('/books/edit/:id', validationBooks,mainController.processEdit);

module.exports = router;
