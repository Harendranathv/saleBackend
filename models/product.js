const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: String,
  unit: String,
  imageUrl: String,
  price: Schema.Types.Decimal128,
  createdDate: {
    type: Date,
    default: Date.now
  }
});
productSchema.set('toJSON', {
  getters: true,
  transform: (doc, ret) => {
    ret.price = +ret.price.toString();
    // delete ret.id;
    delete ret.__v;
    return ret;
  },
});
module.exports = mongoose.model('Product', productSchema);
