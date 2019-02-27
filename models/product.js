const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: Schema.Types.ObjectId,
    name: String,
    unit: String,
    photo: String,
    categories: [String],
    price: Schema.Types.Decimal128
});

module.exports = mongoose.model('Product', productSchema);
