const express = require('express');
const router = express.Router();


//Requerimos el Main Controller para usarlo en las rutas
const productController = require("../controllers/productController.js")

//Definimos las rutas
router.get('/products',productController.all)


router.get("/productCart",productController.productCart)
router.get("/products/:id",productController.productDetail) /*Hacer que funcione ruta dinamica*/
router.get("/productCreate",productController.productCreate)


/*router.get("products/create",) /*Crear metodo en el controlador*/
/*router.post("products", ) /*Crear metodo en el controlador*/

//Exportamos el Router
module.exports = router