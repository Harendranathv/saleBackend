const mongoose = require('mongoose');
var url = "mongodb+srv://admin:phat30091992@cluster0-eki10.gcp.mongodb.net/test?retryWrites=true";
const connection = mongoose.connect(url, { useNewUrlParser: true });

connection
    .then((db) => {
        return db;
    }, (err) => {
    });

module.exports = connection;
