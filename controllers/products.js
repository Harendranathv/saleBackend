const Product = require('../models/product');

const listProduct = (req, res) => {
    Product
        .find({})
        .then(products => {
            console.log(products);
            res.json(products);
        })
        .catch(err => {
            res.status(400).send(err.errors);
        });
}

const getProduct = (req, res) => {
    Product.findById(req.params.id)
        .then(product => {
            res.json(product);
        })
        .catch(err => {
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


const deleteProduct = (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) return res.status(500).send(err);
        const response = {
            message: "Product successfully deleted"
        };
        return res.status(200).send(response);
    })
}

module.exports = {
    listProduct,
    getProduct,
    createProduct,
    deleteProduct,
}
