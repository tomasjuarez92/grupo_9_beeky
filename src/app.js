const path = require ('path')
const express = require("express");
const app = express();

//Importamos variables de Rutas
const mainRoutes = require ('./routes/mainRoutes.js')
const userRoutes = require ('./routes/userRoutes.js')
const productRoutes = require ('./routes/productRoutes.js')

//Instalamos EJS y acalaramos localizacion de carpeta Views
app.set("view engine","ejs")
app.set("views",path.resolve(__dirname+'/views'))


//Definimos que los archivos estaticos estaran dentro de Public
app.use(express.static(path.resolve(__dirname,"../public")));

//Levantamos el servidor
app.listen(process.env.PORT || 3050,() => console.log('Terminal Corriendo en http://localhost:3050'))

//Rutas Principales
app.use('/', mainRoutes)

//Rutas de Users
app.get('/register', userRoutes)
app.get('/login', userRoutes)

// Rutas de Productos
app.get('/productCart', productRoutes)
app.get('/productDetail', productRoutes)
app.get('/productCreate', productRoutes)