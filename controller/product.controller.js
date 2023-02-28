const db = require("../models");
const product = db.product;
const adProduct = db.adproduct;
// const express = require('express')
// const app = express();
const imageUrl = require("./img.controller")
// const formidable = require("express-formidable");
// app.use(formidable());
exports.addProduct = (req, res) => {
    // if ( !req.body.name || !req.body.price || !req.body.color) {
    //     return res.status(400).send({
    //       success: "false",
    //       message: "Incomplete or invalid data provided!",
    //     });
    //   }

  const products = new product({
    name: req.body.name,
    price: req.body.price,
    colour: req.body.colour,
    pic:req.body.pic,
  });
  products
    .save()
    .then((data) => {
      res.status(200).send({
        success: "true",
        message: "Product Added!",
        data: data,
      });
    })
    .catch((error) => {
      res.status(400).send({
        success: "false",
        message: "Product Not Added!",
        data: error,
      });
    });
};

exports.allProduct = (req, res) => {
  adProduct.find({}).then((data) => {
      res.status(200).send({
        success: "true",
        message: "All Products!",
        data: data,
      });
    });
  };

//   exports.updateImg= (req, res) => {
//     // Make a request to the "upload image" API endpoint
//     request.post({
//       url: 'http://localhost:5000/api/single',
//       formData: { image: fs.createReadStream(req.body.imagePath) }
//     }, (error, response, body) => {
//       if (error) {
//         res.status(500).send({ success: false, error });
//       } else {
//         const { success, imageUrl } = JSON.parse(body);
//         if (success) {
//           // Update the product with the image URL
//           const productId = req.params.id;
//           product.findByIdAndUpdate(productId, { imageUrl }, (error, product) => {
//             if (error) {
//               res.status(500).send({ success: false, error });
//             } else {
//               res.send({ success: true, product });
//             }
//           });
//         } else {
//           res.status(500).send({ success: false, error: 'Failed to upload image' });
//         }
//       }
//     });
//   };

  
  
  
//   app.put('/api/product/:id'