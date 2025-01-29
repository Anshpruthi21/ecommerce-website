const {default: mongoose}= require("mongoose")

const productSubCategorySchema= mongoose.Schema({
    subCategoryName:{
        type: String,
        required: true
    },
    categoryId:{
        type: string,
        required: true
    }

})

const ProductSubCategory=mongoose.model("ProductSubCategory",productSubCategorySchema)
module.exports=ProductSubCategory