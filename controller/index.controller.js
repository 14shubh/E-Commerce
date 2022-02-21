exports.indexPage = (req, res, next) => {
    res.render('index.ejs', {
        title: 'Divine Electronic'
    });
}