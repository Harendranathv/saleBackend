const dataFilePath = './data/products.json';

const express = require('express');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 5000;
const fs = require('fs');
const bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:phat30091992@cluster0-eki10.gcp.mongodb.net/test?retryWrites=true";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("products", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});
express()
    .use(bodyParser())
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .use(cors())
    .get('/', (req, res) => res.render('pages/index'))
    .get('/products', (req, res) => res.json([]))
    // .post('/products', (req, res) => {
    //     let newProduct = req.body;
    //     newProduct.id = products.length + 1;
    //     products.push(newProduct);
    //     fs.writeFile(dataFilePath, JSON.stringify(products), ()=>{
    //     });
    //     res.json(products);
    // })
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));
