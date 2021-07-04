const productModel = require('../models/productModel')

const productController = {
    all: (req,res) => res.send(productModel.all),
    productCart: (req,res) => res.render('./products/productCart'),
    productDetail: (req,res) => res.render('./products/productDetail'),
    productCreate: (req,res) => res.render('./products/productCreate')
}

module.exports = productController