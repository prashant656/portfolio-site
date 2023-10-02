const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render("pages/index");
});
app.get("/aboutMe", (req, res) => {
    res.render("pages/aboutMe", {
      title: "About EJS",
      details: [
        "EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.",
        "EJS is compatible with Express for back-end use as it hooks into the View engine architecture that Express provides and lets you render web pages to the client with res.render() in Express.",
      ],
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