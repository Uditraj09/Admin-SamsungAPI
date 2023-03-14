module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      userId: String,
      items: Array,
    },
    { timestamps: true }
  );

  const Cart = mongoose.model("cart", schema);
  return Cart;
};
