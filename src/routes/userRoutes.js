const express = require('express');
const router = express.Router();


//Requerimos el Main Controller para usarlo en las rutas
const userController = require("../controllers/userController.js")

//Definimos las rutas
router.get("/register",userController.register)
router.get("/login",userController.login)


//Exportamos el Router
module.exports = router