const {default: mongoose}= require ("mongoose");

const adminSchema = mongoose.Schema({
    username: {
        type: String, 
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

const Admin=mongoose.model("Admin", adminSchema);
exports.Admin = Admin;

