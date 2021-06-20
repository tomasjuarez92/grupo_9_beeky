
const userController = {
    register: (req,res) => res.render('./users/register.ejs'),
    login: (req,res) => res.render('./users/login.ejs'),
}

module.exports = userController