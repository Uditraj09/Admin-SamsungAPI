

module.exports = (app) => {
  const express = require("express");
  const router = express.Router();
  const img = require("../controller/img.controller");
  const product = require("../controller/product.controller");
  const AdminLogin = require("../controller/Admin/adminLogin.controller");
  const user = require("../controller/User/user.controllers");
  const AdminProduct = require("../controller/Admin/adminProduct.controller")


  router.post("/single", img.uploadImg);
  router.post("/addProduct", product.addProduct);
  router.get("/getProduct", product.allProduct);
  router.post("/adminLogin", AdminLogin.adminLogin);
  // router.put('/updateProduct',product.updateImg)
  router.post("/admin/add-product",AdminLogin.addproducts);
  router.get("/admin/get-product",AdminLogin.getProducts);
  router.post("/admin/update-product",AdminLogin.updateProduct);
  router.post("/admin/delete-product",AdminLogin.deleteProduct);
  router.post('/register',user.register);
  router.post('/login',user.login);
  router.post('/get-register-user',user.getRegister);
  router.post('/admin/get-ordered-user',AdminProduct.userProduct);
  router.post('/admin/completed-order',AdminProduct.completedOrder)
  router.post('/admin/buyProduct',AdminProduct.buyProduct)
  router.post('/admin/canceled-order',AdminProduct.cancelOrder)
  router.post('/admin/add-to-cart',AdminProduct.addToCart)


  app.use("/api", router);
};
