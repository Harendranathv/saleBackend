const productControl = require('../controllers/products');

module.exports = (app) => {
  app.route('/products').get(productControl.listProduct),
  app.route('/products/:id').get(productControl.getProduct),
  app.route('/products').post(productControl.createProduct),
  // app.route('/products/:id').put(productControl.update_user),
  app.route('/products/:id').put(productControl.deleteProduct)
}
