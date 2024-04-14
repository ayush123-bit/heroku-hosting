const express = require("express");
const app = express();
const hbs=require("hbs")
const path = require("path");


const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");

app.use(express.static(static_path));
require("./db/conn");
const Login  = require("./models/register");


app.set('view engine', 'hbs');
app.set("views", template_path);
hbs.registerPartials(partial_path);
hbs.registerHelper('formatDate', (dateString) => {
    return new Date(dateString).toLocaleString();
  });
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const nodemailer=require("nodemailer");
const schedule=require("node-schedule");
app.get('/',(req,res)=>{
  res.render("registration");
})
//===============================================================================
app.post("/register",async(req,res)=>{
  try {
const ayus=new Login({
  name:req.body.name,
  password:req.body.password,
  gender:req.body.gender,
  email:req.body.email,
  phone:req.body.phonenumber,
  dateofbirth:req.body.dob,
  language:req.body.language,
  address:req.body.address
  })
  

  const ayus1= await ayus.save()
  res.send("Mission Completed");
  } catch (error) {
      res.status(400).send(error);
  }
})
//================================================================
app.listen(3400,()=>{
  console.log("Server is running at 3400");
})