module.exports.render = (req, res) => {
    res.render('home', {errors: {}, nickname: ''});
}