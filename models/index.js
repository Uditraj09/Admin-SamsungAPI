const dbConfig = require("../config/db.config");
const mongoose = require("mongoose");
const db ={}
db.mongoose = mongoose;
db.url = dbConfig.url;
db.images = require("./img.models.js")(mongoose);
db.product = require("./product.models.js")(mongoose)
db.adminLogin = require("./login.model.js")(mongoose)
db.adproduct = require('./Adproduct.model')(mongoose)
db.User = require('./user.models')(mongoose)
db.order = require('./order.models')(mongoose)
db.cart = require("./Cart.model")(mongoose)



module.exports = db;