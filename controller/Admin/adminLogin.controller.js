const db = require("../../models");
const adLogin = db.adminLogin;
const adProduct = db.adproduct;

exports.adminLogin = async (req, res) => {
  const email = "Samsungadmin@gmail.com";
  const password = "qwerty";
  const user = { email: req.body.email, password: req.body.password };
  if (user.email === email && user.password === password) {
    return res.status(200).send({
      success: true,
      data: null,
      message: "Login successful!",
    });
  } else {
    return res.status(200).send({
      success: false,
      data: null,
      message: "Invalid Credentials!",
    });
  }
};

exports.addproducts = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  if (process.env.ADMIN_AUTH_CODE == req.body.auth_code) {
    const pro = new adProduct({
      product: req.body.product,
      price: req.body.price,
      color: req.body.color,
      price: req.body.price,
      img: req.body.image,
    });
    pro.save(pro).then((data) => {
      res.status(200).send({
        message: "Product Added!",
        data: data,
        success: true,
      });
    });
  } else {
    res.status(400).send({
      success: false,
      data: [],
      message: "You are not authorized",
    });
  }
};
exports.getProducts = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (process.env.ADMIN_AUTH_CODE == req.query.auth_code) {
    adProduct.find({}).then((data) => {
      if (data) {
        res.status(200).send({
          success: true,
          data: data,
          message: "Product Found!",
        });
      } else {
        res.status(400).send({
          success: false,
          data: [],
          message: "Product Not Found!",
        });
      }
    });
  } else {
    res.status(400).send({
      success: false,
      data: [],
      message: "You are not authorized",
    });
  }
};

exports.updateProduct = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const pro = {
    product: req.body.product,
    price: req.body.price,
    color: req.body.color,
    price: req.body.price,
    img: req.body.img,
  };
  if (process.env.ADMIN_AUTH_CODE == req.body.auth_code) {
    adProduct
      .findByIdAndUpdate(req.body.id, pro, {
        useFindAndModify: false,
      })
      .then((data) => {
        res.status(200).send({
          message: "Product updated successfully",
          data: data,
          success: true,
        });
      });
  } else {
    res.status(400).send({
      success: false,
      data: [],
      message: "You are not authorized",
    });
  }
};

exports.deleteProduct = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (process.env.ADMIN_AUTH_CODE == req.body.auth_code) {
    adProduct.findByIdAndDelete(req.body.id).then((data) => {
      res.status(200).send({
        success: "true",
        message: "Product Deleted!",
        data: null,
      });
    });
  } else {
    res.status(400).send({
      success: false,
      data: [],
      message: "You are not authorized",
    });
  }
};
