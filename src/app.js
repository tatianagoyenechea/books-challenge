const express = require('express');
const mainRouter = require('./routes/main');
const methodOverride = require('method-override');
const app = express();
const session = require("express-session");
const cookieParser = require('cookie-parser');

//app.use(express.urlencoded({ extended: false }));
//app.use(express.json());
//app.use(methodOverride('_method'));
//app.set('view engine', 'ejs');
//app.set('views', 'src/views');
//app.use('/',mainRouter);
//app.use(session({
  //secret: "SHHH, IT'S A SECRET",
 // resave: false,
//  saveUninitialized: false
//}))

app.listen(3000, () => {
  console.log('listening in http://localhost:3000');
});
