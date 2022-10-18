const bcryptjs = require('bcryptjs');
const db = require('../database/models');
const {validationResult} = require('express-validation');
const mainController = {
  home: (req, res) => {
    db.Book.findAll({
      include: [{ association: 'authors' }]

    })
      .then((books) => {
        res.render('home', { books });
      })
      .catch((error) => console.log(error));
  },
  bookDetail: (req, res) => {
    db.Book.findByPk(req.params.id,{include: [{ association: 'authors' }]})
    .then(book => {
      res.render('bookDetail', { book });
    })
    
  },
  bookSearch: (req, res) => {
    res.render('search', { books: [] });
  },
  bookSearchResult: (req, res) => {
    // Implement search by title
    res.render('search');
  },
  deleteBook: (req, res) => {
    // Implement delete book
    db.Book.findByPk(req.params.id)
      .then(()=> 
      db.Book.destroy({ where: {id:req.params.id}, force:true})) //NO SE PUEDE ELIMINAR POR QUE ES UNA FK, PREGUNTARLE A LUQUI
    res.render('home');
  },
  authors: (req, res) => {
    db.Author.findAll()
      .then((authors) => {
        res.render('authors', { authors });
      })
      .catch((error) => console.log(error));
  },
  authorBooks: (req, res) => {
    // Implement books by author
    authorBooks: (req, res) => {
      db.Author.findByPk(req.params.id, {
        include: [{ association: 'books' }] 
      })
    
        .then((autor)  => {	
          res.render('authorBooks', {autor} )

        })
    }
  },
  register: (req, res) => {
   let author = req.body.author;
  },
  processRegister: (req, res) => {
    db.User.create({
      Name: req.body.name,
      Email: req.body.email,
      Country: req.body.country,
      Pass: bcryptjs.hashSync(req.body.password, 10),
      CategoryId: req.body.category
    })
      .then(() => {
        res.redirect('/');
      })
      .catch((error) => console.log(error));
  },
  login: (req, res) => {
    // Implement login process
    res.render('login');
  },
  processLogin: (req, res) => {
    // Implement login process
    res.render('home');
  },
  edit: (req, res) => {
    // Implement edit book
    db.Book.findByPk(req.params.id)
    .then((then) => {
      return res.render('editBook',{books})
    })
    
  },
  processEdit: (req, res) => {
    // Implement edit book
    const resultValidation = validationResult(req);
    let bookToEdit = db.Book.findByPk(req.params.id)
    .all([bookToEdit])
    .then((bookToEdit)=> {
      if (resultValidation.errors.length>0) {
        res.render ('editBook', {bookToEdit, errors: resultValidation.mapped()})
      console.log(resultValidation)
   
    }else{
      let books = {
        title: req.body.title,
        cover: req.body.cover,
        description: req.body.description,
      }
    } 
    db.Book.update(books, { where: { id: req.params.id } })	
    .then(() => {
      return res.redirect('/')
      })		
   
    })
  }
}
