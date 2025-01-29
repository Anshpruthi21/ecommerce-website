const express=require("express");
const { sellerSignup, sellerSignin, verify } = require("../controllers/auth/auth.js");
const authRouter=express.Router();

/////seller/////
authRouter.post("/sellerSignup", sellerSignup)
authRouter.post("/sellerSignin", sellerSignin)
authRouter.get("/seller/verify",verify)

/////client/////
/////admin/////

module.exports=authRouter;