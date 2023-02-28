const db = require("../../models");
const adProduct = db.adproduct;
const User = db.User
const Order= db.order

exports.userProduct = async(req,res)=>{
    
    try {
    const orders = await Order.find({ userId: req.params.userId }).populate('products');
    res.json(orders);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  
}
}
