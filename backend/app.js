let express= require("express")
const ErrorHandler = require("./utils/Errorhandler");
const catchAsyncErrors = require("./middelware/catchAsyncError");

const {UserModel} = require("./model/usermodel")

let app=express()

app.use(express.json())
const Errorhandle=require("./middelware/error")

I

app.post("/create", middelware, catchAsyncErrors (async (req, res, next)=>{

const {name,email,password} =req.body

if(name &&email && password){
const newUser= new UserModel({ 
    name, email, password 
})

await newUser.save()

res.status(200).send({msg: "registration successfull"})

}

else{

return next(new ErrorHandler("registration unsuccessfull", 400));
}
}))


app.use(Errorhandle)
module.exports={app}