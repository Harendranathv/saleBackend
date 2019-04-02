const root_controller = require('../controllers/root');

module.exports = (app) => {
  app.route('/items').get((req, res) => {
    res.json({ x: 1 });
  })
}
