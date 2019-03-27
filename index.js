const dataFilePath = './data/products.json';

const express = require('express');
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const fs = require('fs');
const bodyParser = require('body-parser');
let rawdata = fs.readFileSync(dataFilePath);
let products = JSON.parse(rawdata);
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://admin:phat30091992@cluster0-eki10.gcp.mongodb.net/test?retryWrites=true";
//
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.createCollection("products", function(err, res) {
//         if (err) throw err;
//         console.log("Collection created!");
//         db.close();
//     });
// });
const app = express();
app
    .use(cors())
    .use(bodyParser())
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/enter-new-product', (req, res) => res.render('pages/index'))
    // .get('/products', (req, res) => res.json(products))
    // .post('/products', (req, res) => {
    //     console.log(req.body);
    //     let newProduct = req.body;
    //     newProduct.id = products.length + 1;
    //     products.push(newProduct);
    //     fs.writeFile(dataFilePath, products, () => {
    //
    //     });
    //     res.json(products);
    // })
    .listen(PORT, () => {
        // import Router
        require('./lib/database');  // connect DB

        fs.readdirSync(path.join(__dirname, './routes')).map(file => {
            require('./routes/' + file)(app);
        });
        console.log('Listening to Port: ', PORT);
    })

