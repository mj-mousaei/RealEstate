const mongoose = require("mongoose");



  const HomeSchema = new mongoose.Schema(
    {
        price : String,
        city : String,
    }
); 

const HomeModel = mongoose.model('myhome', HomeSchema);


module.exports = HomeModel;