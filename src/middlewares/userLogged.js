//const User = require ('../User');

function userLogged (req,res, next){
    if (req.session.usuarioLogueado){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.usuarioLogueado;
        
    }


   // let emailInCookie = req.cookie.userEmail;
   // let userFromCokkie = User.findByField('email', emailInCookie);
    //console.log(userFromCookie);
    next();
    //let userInDB = User.findByField('email',req.body.email);
    //return res.send(userInDB)
    
    
}

module.exports = userLogged;