const mongoose = require("mongoose");



  const ImgSchema = new mongoose.Schema(
    {
        img : String
    }
); 

const ImgModel = mongoose.model('img', ImgSchema);


module.exports = ImgModel;