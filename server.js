module.exports = (router) => {

const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({    
 service: 'gmail',
 host: 'smtp.gmail.com', 
 auth: {        
  user: process.env.USER,        
  pass: process.env.PASSWORD    
 }
});


router.post("/api", function(req, res) {
 res.render("index");
 var time = new Date();
 const subject = req.subject;
 const message = req.message;
 const name = req.name;
 const email = req.email;
 const mailOptions = {
  from: process.env.FROM,
  to: "yuj93762@eoopy.com",
  subject: subject,
  html: `<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>New Form Submission!</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="Content-Type" content="text/html; ">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<link href="https://fonts.googleapis.com/css?family=Poppins:400,700%7COpen+Sans:400,700%7CSource+Code+Pro" rel="stylesheet">
<style media="screen" type="text/css">
@media only screen and (max-width: 640px) {
h1, h2, h3, h4 {
font-weight: 700;
margin: 22px 0 5px;
}
h1 {
font-size: 22px;
}
h2 {
font-size: 18px;
}
h3 {
font-size: 16px;
}
.container {
padding-top: 22px;
}
.content-wrap {
padding: 11px;
}
}
</style>
</head>
<body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" bgcolor="#ffffff" itemscope itemtype="http://schema.org/EmailMessage" style='background-color:#fff; font-family:"Open Sans", sans-serif; font-size:16px; height:100%; line-height:1.45; margin:0; padding:0; width:100%' height="100%" width="100%">
<table cellpadding="0" cellspacing="0" border="0" bgcolor="#f9f9f8" style="width:100%; background-color:#f9f9f8; margin:0 auto" width="100%">
<tr>
<td valign="top" align="center" style="vertical-align:top">
<table cellpadding="0" cellspacing="0" border="0" style="width:100%; margin:22px auto; max-width:616px" width="100%">
<tr>
<td style="vertical-align:top" valign="top">
<table cellpadding="0" cellspacing="0" border="0" style="width:100%" width="100%">
<tr>
<td align="center" style="vertical-align:top; color:#103742; padding:22px" valign="top">
<div>
<img src="https://igorkowalczyk.github.io/lib/favicon/favicon.jpg" alt="Mailer Logo" width="66px" height="66px" style="max-width:100%; margin-bottom:22px">
</div>
<p style='font-weight:700; margin-bottom:11px; font-family:"Poppins", sans-serif; margin:0; text-transform:uppercase'>New Form Submission</p>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" style="width:100%" width="100%">
<tr>
<td style="vertical-align:top; padding:22px" valign="top">
<!-- content wrapper -->
<table cellpadding="0" cellspacing="0" border="0" style="width:100%" width="100%">
<tr>
<td align="center" style="vertical-align:top; padding:0 0 22px" valign="top">
Hey there,<br><br>
Someone just submitted your form on an unknown webpage. Here's what they had to
say:
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" style="width:100%; background-color:#fff" width="100%" bgcolor="#ffffff">
<tr>
<td align="center" style="vertical-align:top" valign="top">
<table cellpadding="0" cellspacing="0" border="0" style="width:100%; text-align:left" width="100%" align="left">
<tr>
<td style='vertical-align:top; font-family:"Source Code Pro", monospace; padding:11px' valign="top">
<table cellpadding="0" cellspacing="0" border="0" style="width:100%" width="100%">
<tr>
<td style='vertical-align:top; font-family:"Source Code Pro", monospace; padding:11px; border-bottom:#e3e3da 1px solid; font-size:14px' valign="top">
<strong>Name:</strong><br>
<pre style="white-space:pre-line; font-family:inherit; margin:0">` + name + `</pre>
</td>
</tr>
<tr>
<td style='vertical-align:top; font-family:"Source Code Pro", monospace; padding:11px; border-bottom:#e3e3da 1px solid; font-size:14px' valign="top">
<strong>E-Mail:</strong><br>
<pre style="white-space:pre-line; font-family:inherit; margin:0">` + email + `</pre>
</td>
</tr>
<tr>
<td style='vertical-align:top; font-family:"Source Code Pro", monospace; padding:11px; border-bottom:#e3e3da 1px solid; font-size:14px' valign="top">
<strong>Message:</strong><br>
<pre style="white-space:pre-line; font-family:inherit; margin:0">` + message + `</pre>
</td>
</tr>
</table>
</td>
</tr>
<tr align="center" style="padding:0 0 22px">
<td style='vertical-align:top; font-family:"Source Code Pro", monospace; padding:11px' valign="top">
<span style="color:#918f8d; font-size:12px">Submitted ` + time + `.</span>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" style="width:100%" width="100%">
<tr>
<td align="center" style="vertical-align:top; padding:22px; text-align:center; color:#918f8d; font-size:12px" valign="top">If you don't wish to receive these emails, please remove the form endpoint from an unknown webpage!
</td>
</tr>
<tr>
<td align="center" style="vertical-align:top; padding:22px; text-align:center; color:#918f8d; font-size:12px" valign="top">
<a href="https://github.com/igorkowalczyk/mailer" style="color:#918f8d; text-decoration:underline; font-size:12px"><img src="https://d1ma8knj6twvg6.cloudfront.net/static/img/social/github.png" style="max-width:100%"></a>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>`
 };

 transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
   console.log(error);  
  } else {     
   console.log('Email sent: ' + info.response);  
  }   
 });
});
}
