const productControl = require('../controllers/products');
var formidable = require('formidable');
var fs = require('fs');
module.exports = (app) => {
    app.post('/upload', function (req, res, next) {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.upload.path;
            var newpath = './public/upload/' + files.upload.name;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    })
}
