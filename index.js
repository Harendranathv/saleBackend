const dataFilePath = './data/products.json';

const express = require('express');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 5000;
const fs = require('fs');
const bodyParser = require('body-parser');
let rawdata = fs.readFileSync(dataFilePath);
let products = JSON.parse(rawdata);
express()
    .use(bodyParser())
    .use(cors())
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .get('/products', (req, res) => res.json(products))
    .post('/products', (req, res) => {
        let newProduct = req.body;
        newProduct.id = products.length + 1;
        products.push(newProduct);
        fs.writeFile(dataFilePath, JSON.stringify(products), ()=>{
        });
        res.json(products);
    })
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));
