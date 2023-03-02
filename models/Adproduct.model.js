module.exports = mongoose => {
    var productSchema = mongoose.Schema(
        {
            product : String,
            price  : String,
            color : String,
            img : String,
        },
        { timestamps: true }
        
    );
  
    const Product = mongoose.model("adproduct", productSchema);
    return Product;
};