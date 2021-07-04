const path = require('path')
const fs = require('fs')

const model = {
    all: function() {
        const directory = path.resolve(__dirname,'../data','products.json')
        const file = readFileSync(directory,'utf-8')
        const convert = JSON.parse(file)
        return convert
    },
}

module.exports = model