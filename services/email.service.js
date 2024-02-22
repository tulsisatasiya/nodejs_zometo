const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "tulsisatasiya90@gmail.com",
    pass: "wqjkejawsejdymur",
  },
});

// sendmail
const send_Mail = async (to, data, subject) => {
  let maildata = `Dear Esteemed Customer,
  On behalf of the entire Zomato family, we are thrilled to welcome you aboard as the newest member of our team! We are excited to have someone with your skills and expertise join us at Zomato, and we look forward to achieving great milestones together.

  Here at Zomato, we believe in the power of good food to bring people together. Our mission is to ensure that everyone has access to delicious meals, no matter where they are. As a part of our team, you will play a crucial role in making this mission a reality.
  
  We know that you bring unique talents and perspectives to our company, and we are eager to see the positive impact you will make. Zomato is not just a workplace; it's a community of passionate individuals who are dedicated to revolutionizing the way people experience food.
  
  To help you settle in smoothly, our HR team has arranged an orientation program on [Date] at [Location]. This will be a great opportunity for you to get to know your colleagues, learn more about our company culture, and gain insights into how we operate.
  
  Please make sure to bring any necessary documentation, and don't hesitate to reach out if you have any questions or need assistance before your start date. We want your onboarding experience to be as seamless as possible.
  
  Once again, welcome to Zomato! We are confident that your journey with us will be rewarding, challenging, and filled with opportunities for growth.
  


  Best regards,
  Tulsi Satasiya
  
`
  

  let mySub = `Welcome to Xometo - Your Ultimate Food Delivery Destination!`;
  try {
    return transporter.sendMail({
      from: "<tulsisatasiya90@gmail.com>",
      to,
      subject: mySub,
      text: maildata,
    });
  } catch (error) {
    return false;
  }
};

module.exports = {
  send_Mail,
};

