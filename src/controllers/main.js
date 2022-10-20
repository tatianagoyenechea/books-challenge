const bcryptjs = require('bcryptjs');
const db = require('../database/models');
const {validationResult} = require('express-validation');
const e = require('express');
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
    db.Book.findAll()
    .then((books) => {
      res.render('search', { books });
    })
  },

  bookSearchResult: (req, res) => { // Implement search by title
    res.render('search');
    db.Book.findOne({where: {title: req.body.title}
    .then (books => {
      if (books != undefined) {
        
      }else {
        res.redirect('search')

      }

    })
  })
 },

  deleteBook: (req, res) => { // Implement delete book
   let deleteBook = products.filter(producto =>{
     return producto.id != req.params.id;
    
    fs.writeFileSync(productsFilePath, JSON.stringify(deleteBook,null,2));
    res.render("afterDelete")
    })

    //db.Book.findByPk(req.params.id)
    //  .then(()=> 
    //  db.Book.update({estado1},{ where: {id:req.params.id}, force:true})) //NO SE PUEDE ELIMINAR POR QUE ES UNA FK, PREGUNTARLE A LUQUI
    //.catch(error => res.render(error))
    //return res.redirect('/')
    //return res.redirect('/home'); en el caso que se quiera o...
      return res.redirect('/')
  },

  authors: (req, res) => {
    db.Author.findAll()
      .then((authors) => {
        res.render('authors', { authors });
      })
      .catch((error) => console.log(error));
  },

  authorBooks: (req, res) => { // Implement books by author
    authorBooks: (req, res) => {
      db.Author.findByPk(req.params.id, {
        include: [{ association: 'books' }] //me salen duplicadosssss :(
      })
    
        .then((autor)  => {	
          res.render('authorBooks', {autor} )

        })
    }
  },

  register: (req, res) => {
    res.render('register');
   
  },
  profile: (req,res) => {
    
    return res.render ('userProfile',{
      User: req.session.userLogged
    });
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
  

  login: (req, res) => { // Implement login process
    res.render('login');
  },
    
  processLogin: (req, res) => { // Implement login process
  db.User.findOne({
    where: {email: req.body.email}
  }).then((usuario)=>{
    if (usuario){
      let passOk = bcryptjs.compareSync(req.body.password,usuario.Pass)
      console.log(passOk)
      console.log(usuario)
      if(passOk){
        req.session.usuarioLogueado = usuario
        delete usuario.password
        res.cookie("userEmail",req.body.email,{maxAge: 300 * 60 * 60})
        res.redirect("/");
      
      }else{
        return res.render("login",{
          errors: {
            datosIncorrectos: {
              msg: "LAS CREDENCIALES SON INVÁLIDAS"
            }
          }
        })
      }
    }else{
      return res.render("login", {
        errors: {
          datosIncorrectos: {
            msg: "LAS CREDENCIALES SON INVÁLIDAS"
          }
        }
      })
    }
  })
    //res.render('home');

  },
  edit: (req, res) => {
    db.Book.findByPk(req.params.id)
    .then((books) =>{
    return res.render('editBook', {books})
  })
  
},

processEdit: (req, res) => {
  const resultValidation = validationResult(req);
  let bookToEdit=db.Book.findByPk(req.params.id)
  Promise
  .all([bookToEdit])
  .then((bookToEdit)=> {
    if (resultValidation.errors.length>0) {
      res.render ('editBook', {bookToEdit, errors: resultValidation.mapped()})
    console.log(resultValidation)
  } else {
    let books = {
      title: req.body.title,
      cover: req.body.cover,
      description: req.body.description, 
    }
    db.Book.update(books, { where: { id: req.params.id } })	
      .then(() => {
        return res.redirect('/')
        })		
      }		
    })
},
  //edit: (req, res) => { // Implement edit book
    //db.Book.findByPk(req.params.id)
    //.then((books) => {
     // return res.render(path.result(__dirname,'..',"views",'editBook',{books}))
    //})
 // },
  logout: (req,res) =>{
    req.session.destroy();
    res.cookie('email',null,{maxAge: -1});
    res.redirect('/')
    },
  }

  processEdit: (req, res) => { // Implement edit book
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

module.exports = mainController;
