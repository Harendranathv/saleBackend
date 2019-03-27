const root_controller = require('../controllers/root');

module.exports = (app) => {
    app.route('/', (req, res) => {
        res.json({});
    })
}
