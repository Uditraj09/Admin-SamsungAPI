

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
  router.post("/admin/get-product",AdminLogin.getProducts);
  router.post("/admin/update-product",AdminLogin.updateProduct);
  router.post("/admin/delete-product",AdminLogin.deleteProduct);
  router.post('/register',user.register);
  router.post('/login',user.login);
  router.post('/get-register-user',user.getRegister);
  router.post('/admin/get-ordered-user',AdminProduct.userProduct);


  app.use("/api", router);
};
