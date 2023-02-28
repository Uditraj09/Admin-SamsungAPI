module.exports = (mongoose) => {
    var productSchema = mongoose.Schema({
        
       name: String,
       price : String,
       colour : String,
       pic : String
  })
    const product = mongoose.model("product",productSchema)
    return product
}