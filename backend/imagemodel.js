const mongoose = require('mongoose');

const myProject = new mongoose.Schema({
   uname:String,
   email:String,
   image:String,
   hobbies:[String],
});
module.exports= mongoose.model('imagesadd',myProject);