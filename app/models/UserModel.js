const mongoose = require("mongoose");



  const UserSchema = new mongoose.Schema(
    {
      email : {type: String , required : true} ,
      password :  {type: String ,  required : true} ,
      name : String ,
      surename : String,
      phone : String ,
      country : String ,
      state : String ,
      address : String,
      postalcode : String,
      img : String
    }, { timestamps : true }
); 




const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;