exports.loginPage = (req, res, next) => {
    res.render('user_views/login')
}

exports.registrationPage = (req, res, next) => {
    res.render('user_views/register', {
        title: 'Registration'
    });
}

exports.profilePage = (req, res, next) => {
    res.render('user_views/profile');
}