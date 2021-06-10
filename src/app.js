const path = require ('path')
const express=require("express");
const app=express();

//Importamos variables de Rutas
const mainRoutes = require ('./routes/mainRoutes.js')


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
// OJO que quedaron login y register como main en lugar de User. ACTUALIZAR
app.get('/register', mainRoutes)
app.get('/login', mainRoutes)

// Rutas de Productos
app.get('/productCart', (req,res) => res.sendFile(path.resolve(__dirname,"./views/productCart.html")))
app.get('/productDetail', (req,res) => res.sendFile(path.resolve(__dirname,"./views/productDetail.html")))