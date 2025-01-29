const {app} = require("./app")
require("dotenv").config()
 
const port=process.env.PORT

app.get("/ecom",async(req,res)=>{
    res.send("heloooo")
})


app.listen(port,()=>{
    console.log(`App is running on http://localhost:${port}`)
})