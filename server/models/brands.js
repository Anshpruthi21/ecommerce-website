const {default: mongoose}= require("mongoose")

const brandsSchema= mongoose.Schema({
    brandName:{
        type: String,
        required: true
    },
    subCategory:{
        type: Array,
        default: []
    },
    logo:{
        type: String,
        required: true
    }

})

const Brand=mongoose.model("Brand",brandSchema)
module.exports=Brand