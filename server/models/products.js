const {default: mongoose}= require("mongoose")

const productSchema= mongoose.Schema({
    Name:
    {
        type: tring,
        required: true
    }

})

const Poduct=mongoose.model("product",productSchema)
module.exports=Product