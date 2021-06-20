const express = require('express');
const router = express.Router();


//Requerimos el Main Controller para usarlo en las rutas
const productController = require("../controllers/productController.js")

//Definimos las rutas
router.get("/productCart",productController.productCart)
router.get("/productDetail",productController.productDetail)
router.get("/productCreate",productController.productCreate)

//Exportamos el Router
module.exports = router