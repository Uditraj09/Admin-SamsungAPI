module.exports = mongoose => {
    var productSchema = mongoose.Schema(
        {
            product : String,
            price  : String,
            colour : String,
            img : String,
        },
        { timestamps: true }
        
    );
  
    const Product = mongoose.model("adproduct", productSchema);
    return Product;
};