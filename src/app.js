const express = require('express');
const mainRouter = require('./routes/main');
const app = express();
const session = require("express-session");
//const userLogged = require('./middlewares/userLogged');
app.use(session({
  secret: "IT'S A SECRET",
   resave: false,
  saveUninitialized: false
  }))


//const cookieParser = require('cookie-parser');
//const methodOverride = require('method-override');
app.use(express.json());
//app.use(methodOverride('_method'));

//MIDDLEWARE USUARIO LOGEADO
//app.use(userLogged)
app.use(express.urlencoded({ extended: false }));
//TEMPLATE ENGINE 
app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use('/',mainRouter);


app.listen(2000, () => {
  console.log('listening in http://localhost:2000');
});
