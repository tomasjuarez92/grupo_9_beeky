const path = require ('path')
const method = require('method-override')
const express = require("express");
const app = express();

//Instalamos EJS y acalaramos localizacion de carpeta Views
app.set("view engine","ejs")
app.set("views",path.resolve(__dirname+'/views'))

//Definimos que los archivos estaticos estaran dentro de Public
app.use(express.static(path.resolve(__dirname,"../public")));

//Levantamos el servidor
app.listen(process.env.PORT || 3050,() => console.log('Terminal Corriendo en http://localhost:3050'))

/*Data Configuration*/ 
/*Para poder usar metodos put y delete*/
app.use(express.urlencoded({extended: false}))
app.use(method('_method'))

//Importamos variables de Rutas
const mainRoutes = require ('./routes/mainRoutes.js')
const userRoutes = require ('./routes/userRoutes.js')
const productRoutes = require ('./routes/productRoutes.js')

//Rutas Principales
app.use('/', mainRoutes)

//Rutas de Users
app.get('/register', userRoutes)
app.get('/login', userRoutes)

// Rutas de Productos
app.get('products',productRoutes)

app.get('/productCart', productRoutes)
app.get('/productDetail', productRoutes)
app.get('/productCreate', productRoutes)