const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render("pages/index");
});
app.get("/aboutMe", (req, res) => {
    res.render("pages/aboutMe", {
    });
  });
  app.get("/projects",(req,res)=>{
    res.render("pages/projects");
  })
  app.get("/contact",(req,res)=>{
    res.render("pages/contact");
  })
  app.get("/services",(req,res)=>{
    res.render("pages/services");
  })
  
app.listen(3000);