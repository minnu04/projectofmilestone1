let express= require("express")
const {UserModel} = require("./model/usermodel");
const userRoute=require("./controllers/userRoute");

let app=express()
app.use(express.json())
const errorMiddleware=require("./middleware/error")

app.use("/user",userRoute)

app.use(errorMiddleware)

module.exports={app}