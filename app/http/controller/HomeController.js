const mongoose = require("mongoose");
const config = require("config");
const _ = require('lodash');
const HomeModel = require("../../models/HomeModel");
const UserModel = require("../../models/UserModel");



module.exports = new class ThemeController {


  async homeList(req,res){
    const homes = await HomeModel.find();
    res.send(homes);
}



  async myNewHome(req,res){
    let myHome = new HomeModel({
        user : req.body.user,
        price : req.body.price,
        city : req.body.city,
    });
    myHome = await myHome.save();
    res.send(myHome);        
}

async editHome(req, res) {
    const id = req.params.id;
    if (!id)
    return res.status(404).send({message: "Not found"})

    const result = await HomeModel.findByIdAndUpdate(id, {
      $set: _.pick(req.body, [
        'price',
        'city',
      ]),
    },{new : true});
    if (!result) return res.status(404).send('not found');
    res.send(
      _.pick(result, [
        'price',
        'city',
      ]),
    );
  }

  async deleteHome(req, res) {
    const id = req.params.id;
    const result = await HomeModel.findByIdAndRemove(id);
    res.status(200).send();
  }

};