exports.loginPage = (req, res, next) => {
    res.render('user_views/login')
}

exports.registrationPage = (req, res, next) => {
    res.render('user_views/registration.ejs');
}