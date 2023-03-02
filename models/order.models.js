module.exports = (mongoose) => {
    var orderSchema = mongoose.Schema({
        
       userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
       },
       product: [{
        product_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
      
      
       orderDate: { type: Date,
         default: Date.now 
        },
        status: { 
            type: String,
            enum: ['Pending', 'Completed','Cancel'],
            default: 'Pending'
     },
       
    
  })
    const Order = mongoose.model("order",orderSchema )
    return Order
}
  