const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/SwachhBharat")
.then(()=>{
    console.log("Connection Successful");
})
.catch((e)=>{
    console.log(e);
})