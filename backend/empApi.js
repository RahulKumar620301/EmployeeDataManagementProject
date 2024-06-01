const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const emp = require('./emp') //contact schema importation
const nodemailer = require("nodemailer");


mongoose.connect('mongodb://127.0.0.1:27017/mzdb')

router.get('/',(req,res)=>{
	emp.find((err,data)=>{
		if(!err)
			res.send(data);
		else
			res.send({response:"Error in code",st:0,error:err});
	}).sort({data:-1})
})

router.get('/:id',(req,res)=>{
	let id=req.params.id;
	emp.findOne({_id:id},(err,data)=>{
		if(!err)
			res.send(data);
		else
			res.send({response:"Error in code",st:0,error:err});
	})
})


router.post('/',(req,res)=>{
	let formData= new emp({
		firstName:req.body.firstName,
		lastName:req.body.lastName,
		emailId:req.body.emailId,
		phoneNo:req.body.phoneNo,
		gender:req.body.gender,
		dob:req.body.dob,

	})

	formData.save(err=>{
		if(!err)
			{
				sendMail(formData,info=>console.log("Message sent: %s", info.messageId));
				res.send({response:"Employee Added",st:1})
			}
		else
			res.send({response:"Error in code",st:0,error:err})
	})
})

async function sendMail(data,cb) {

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'pentagonalt91@gmail.com', // generated ethereal user
      pass: 'wfkrnnxlvtsvrmxl', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Project1" <pentagonalt91@gmail.com>', // sender address
    to: data.emailId, // list of receivers
    subject: "your account is added", // Subject line
    html: `<b>Employee: ${data.firstName} ${data.lastName} </b>
   
    <h3>Project1</h3>`, // html body
  });
  cb(info);

}

router.delete('/:id',(req,res)=>{
	let id=req.params.id;
	emp.deleteOne({_id:id},(err)=>{
		if(!err)
			res.send({response:"Employee Deleted",st:1})
		else
			res.send({response:"Error in code",st:0,error:err})
	})
})

router.patch('/:id',(req,res)=>{
	let id=req.params.id;
	const formData={
		firstName:req.body.firstName,
		lastName:req.body.lastName,
		emailId:req.body.emailId,
		phoneNo:req.body.phoneNo,
		gender:req.body.gender,
		dob:req.body.dob,

	}
	emp.updateOne({_id:id},formData,(err)=>{
		if(!err)
			res.send({response:"Account updated",st:1})
		else
			res.send({response:"Error in code",st:0,error:err});
	})
})

module.exports=router;