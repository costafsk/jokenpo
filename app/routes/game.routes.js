module.exports = (application) => {
    application.get('/game', (req, res) => {
        application.app.controllers.game.init(application, req, res);
    });
    application.post('/game', (req, res) => {
        application.app.controllers.game.init(application, req, res);
    });
}