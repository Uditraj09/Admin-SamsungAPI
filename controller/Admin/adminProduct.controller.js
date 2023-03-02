const db = require("../../models");
const adProduct = db.adproduct;
const User = db.User;
const Order = db.order;
const mongoose = require("mongoose");
exports.userProduct = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId }).populate(
      "products"
    );
    res.json(orders);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};
exports.buyProduct = async (req, res) => {
  try {
    
    const buyProduct = new Order({
      userId: req.body.uId,
      product: JSON.parse(req.body.products),
    });
    const buyProductData = await buyProduct.save();
    res.status(200).send({
      success: true,
      message: "Buy Product Details",
      data: buyProductData,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error.message,
    });
  }
};

exports.completedOrder = async (req, res) => {
  try {
    const id = req.body.id;

    const completedOrder = await Order.findByIdAndUpdate(
      id,
      { $set: { status: "Completed" } },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Order Completed!!",
      data: completedOrder,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Order Incompleted!",
      data: error,
    });
  }
};
exports.cancelOrder = async (req, res) => {
  try {
    const id = req.body.id;
    const canceldOrder = await Order.findByIdAndUpdate(
      id,
      { $set: { status: "Cancel" } },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Order Canceled!!",
      data: canceldOrder,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Something Went Wrong!",
      data: error,
    });
  }
};

// exports.orderedUser = async(req,res) => {
//   const user = req.body.uId
//   const product = req.body.pId
//   const product_id = adProduct.find({product})
//   const user_id = User.find({user})

//    await User.find({user}).then((data)=>{
//     if(!user_id == null){
//       if(!product == null){

//         try {
//           Order.findByIdAndUpdate({user_id},{$set :product_id},{$set:{ status:'completed' }})
//           res.status(200).send({
//             success: true,
//             message: 'Product Delivered!',
//             data: null
//           });
//         } catch (error) {
//           console.log(error)
//         }

//       }else{
//         res.status(400).send("Product not exist!")
//       }
//     }else{
//       res.status(400).send("User didnt exist!")
//     }

//   })
// }
// exports.orderedUser = async (req, res) => {
//   const user = req.body.uId;
//   const product = req.body.pId;
//   const product_id = await adProduct.find({ product });
//   const user_id = await User.find({ uId: user });

//   if (user_id.length > 0) {
//     if (product_id.length > 0) {
//       try {
//         await Order.findByIdAndUpdate(
//           { _id: user_id[0]._id },
//           { $set: { productId: product_id[0]._id, status: 'completed' } }
//         );
//         res.status(200).send({
//           success: true,
//           message: 'Product Delivered!',
//           data: null,
//         });
//       } catch (error) {
//         console.log(error);
//         res.status(500).send('Internal server error');
//       }
//     } else {
//       res.status(400).send('Product not exist!');
//     }
//   } else {
//     res.status(400).send('User does not exist!');
//   }
// };
