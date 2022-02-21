exports.adminLoginPage = (req, res, next) => {
    res.render('admin_views/login', {
        title: ' Admin login'
    });
}