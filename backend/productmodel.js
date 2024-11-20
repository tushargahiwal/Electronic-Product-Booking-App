const mongoose = require('mongoose');

const myProject = new mongoose.Schema({
  pname:String,
  price:Number,
  desc:String,
  productType:String
});
module.exports= mongoose.model('products',myProject);