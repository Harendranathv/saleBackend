const Category = require('../models/category');

const listCategories = (req, res) => {
  Category
    .find({})
    .then(categories => {
      res.json(categories);
    })
    .catch(err => {
      res.status(400).send(err.errors);
    });
};
const insertCategory = (req, res) => {
  var category = new Category(req.body);
  category.save(() => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(product);
  })
}


module.exports = {
  listCategories,
  insertCategory
}
