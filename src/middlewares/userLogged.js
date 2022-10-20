const User = require ('../models/User');

function userLogged (req,res, next){
    if (req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }


    let emailInCookie = req.cookie.userEmail;
    let userFromCokkie = User.findByField('email', emailInCookie);
    console.log(userFromCookie);
    next();
}
module.exports = userLogged;