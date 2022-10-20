//Middleware

const { Router } = require("express");
const mainController = require("../controllers/main");
const userLogged = require("../middlewares/userLogged");
const router = require("./main");

//Procesar el formulario de registro
router.post('login',uploadFile.single('avatar'),validations,userLogged.processRegister);

//Procesar el login
router.post('/login',mainController.loginProcess);

//Formulario de login
router.get('/login',mainController.login);

//Logout
router.get('/logout',mainController.logout);

router.post('/logout',mainController.logout);