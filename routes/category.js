const categoryControl = require('../controllers/categories');

module.exports = (app) => {
  app.route('/categories').get(categoryControl.listCategories);
  app.route('/categories').post(categoryControl.insertCategory);
}
