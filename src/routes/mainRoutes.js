const express = require('express');
const router = express.Router();


//Requerimos el Main Controller para usarlo en las rutas
const mainController = require("../controllers/mainController.js")

//Definimos las rutas
router.get("/",mainController.home)
router.get("/register",mainController.register)
router.get("/login",mainController.login)


//Exportamos el Router
module.exports = router