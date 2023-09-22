const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  fname: {
    type: String,
  },
 
  email: {
    type: String,
  }
});

const Contact = mongoose.model("CONTACT", contactSchema);
module.exports = Contact;
