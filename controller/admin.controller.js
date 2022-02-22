const Admin = require('../model/admin.model');
exports.adminLoginPage = (req, res, next) => {
    res.render('admin_views/login.ejs', {
        title: ' Admin login'
    });
}

exports.adminLoginPost = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const admin = new Admin(email, password);
    admin.checkAdmin().then((result) => {
        console.log(result);
        if (result.length > 0) {
            req.session.currentUser = email;
            res.redirect('/admin/dashboard');
        } else {
            res.send('Login Faild...');
        }
    }).catch((err) => {
        console.log(err);
    });
}

exports.adminDashboard = (req, res, next) => {
    res.render('admin_views/Admin_Dashboard.ejs', {
        title: 'Dashboard'
    })
}