const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
  firstName: {type: String, required: [true, 'First Name Required']},
  lastName: {type: String, required: [true, 'Last Name Required']},
  emailId: {type: String, required: [true, 'Email id Required']},
  phoneNo: {type: String, required: [true, 'Phone No Required']},
  gender:{type:String, default: null},
  dob:{type: String, default:null},
  date:{ type: Date, default: Date.now}


});

module.exports = mongoose.model('emp',empSchema, 'emp'); //schema
