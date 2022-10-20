//Middleware

const { Router } = require("express");
const userLogged = require("../middlewares/userLogged");

//Procesar el formulario de registro
router.post('login',uploadFile.single('avatar'),validations,userLogged.processRegister);

//Procesar el login
router.post('/login', userLogged.loginProcess);

//formulario de login
router.get('/login',userLogged.login);