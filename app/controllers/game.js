module.exports.init = (application, req, res) => {
    req.assert('nickname','Defina um apelido bro ;)').notEmpty();
    req.assert('nickname','De 3 a 15 caracteres bro, aham').len(3, 15);
    
    const errors = req.validationErrors();
    const nickname = req.body.nickname;
    
    if (errors) {
        res.render('home', {errors: errors, nickname: nickname});
    }

    // application.get('io').emit('notification', {
    //     nickname: nickname
    // });

    res.render('game', {nickname: nickname});
    // res.render('game');
}