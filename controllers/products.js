const Product = require('../models/product');
const Category = require('../models/category');
const _ = require('lodash');

const listProduct = (req, res) => {
  Product
    .find({})
    .then(products => {
      res.json(products);
    })
    .catch(err => {
      res.status(400).send(err.errors);
    });
}

const getProduct = (req, res) => {
  Product.find({ _id: req.params.id })
    .populate({ path: 'tag' })
    .then(product => {
      console.log(product);
      res.json(product);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send(err.errors);
    });
}

const createProduct = (req, res) => {

  const product = new Product(req.body);

  product.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(product);
  });
}

const updateProduct = (req, res) => {
  Product.findById(req.body.id)
    .then(product => {
      if (!product) {
        res.status(500).send('Not found');
        return;
      }
      product.categories = undefined;
      Category.find({ _id: { "$in": req.body.categories } })
        .then((category) => {
          product.tag = product.tag || [];
          [].push.apply(product.tag, _.map(category, '_id'));
          product.save().then((respProduct) => {
            res.json(respProduct);
          })
          //
          // if (category === null) {
          //   product.categories = [];
          //   product.save().then((productItem) => {
          //     res.json(productItem);
          //   });
          //   return;
          // }
          // // product.categories = product.categories || [];
          // if (!_.includes(product.categories, category._id)) {
          //   product.categories.push(category);
          //   product.save().then((productItem) => {
          //     res.json(productItem);
          //   });
          // }
        })
    })
    .catch(err => {
      res.status(400).send(err.errors);
    });

  //
  // product.save(err => {
  //   if (err) return res.status(500).send(err);
  //   return res.status(200).send(product);
  // });
}


const deleteProduct = (req, res) => {
  Product.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Product successfully deleted"
    };
    return res.status(200).send(response);
  })
};

module.exports = {
  listProduct,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
