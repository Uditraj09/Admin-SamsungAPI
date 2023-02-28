module.exports = (mongoose) => {
    var loginSchema = mongoose.Schema({
        
        email : {
            type : String,
            require : true
        },
        password : String
       
    })
    const adLogin = mongoose.model("adminLogin",loginSchema)
    return adLogin
}