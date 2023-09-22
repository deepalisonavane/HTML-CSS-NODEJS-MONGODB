var express = require("express");
var bodyParser = require("body-parser")
var app = express();
const path = require("path");

//veryyy imp to pass data
app.use(express.json());
app.use(express.static('public'));
//for importing html files
const public = path.join(__dirname, "public/contact.html");
console.log(public)
//mongodb connection
var mongoose = require("mongoose");
var Contact = require("./models/contact");
var dbURI = "mongodb+srv://testing:testing123@cluster0.37v5ftx.mongodb.net/";

mongoose.connect(dbURI )
    .then(r => console.log("connected" ))
    .catch(e => console.log(e));

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    
//same "/contact "as form acton url

app.post("/contact_us", async (req, res) => {
    const { fname,email} = req.body;
    try {
      const contact = new Contact({ fname, email });
      console.log(req.body);
      const contactus = await contact.save();
      res.status(201).json({ message: contactus});
      console.log(contactus);
    } catch (error) {
      res.status(400).send("error");
      
    }
  });

  
app.listen(3000,()=>{
    console.log(`listening to port ${3000}`);
})