const { verifyToken, createToken } = require("../middlewares/auth");
const { userService } = require("../services");
const { findUser } = require("../services/user.service");
const {send_Mail} = require("../services/email.service")

/* GET USER */

const getUser = async (req, res) => {
  const token = req.cookies["login_token"];
  console.log(token);

  if (!token) {
    res.status(500).json({
      message: "you are not login",
    });
  }

  const user = await userService.getUser();
  console.log(user, "get user");

  res.status(200).json({
    message: "profile get success",
    data: user,
  });
};

/* GET USER'S PROFILE */

const getProfile = async (req, res) => {
  const token = req.cookies["login_token"];

  if (!token) {
    res.status(400).json({
      mesasge: "you are not login",
    });
  }

  const user = await verifyToken(token);

  console.log(user);

  res.status(200).json({ message: "admin profile get success", user });
};

/* ADD or REGISTER USER */

const addUser = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const userExist = await userService.getUserByEmail(body.email);   
    if (userExist) {
      throw new Error("User Exist Alreadely");                        
    }
    const user = await userService.addUser(body);
    if(user){
      const email = await send_Mail(user.email);
      console.log("mail forwered ", email.envelope); /* to & from */            
    }
    if (!user) {
      throw new Error("something went wrong");
    }

    res.render('./login')

    // res.status(201).json({
    //   message: "user Created success",
    //   data: user,
    // });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

/* USER LOGIN */
const loginUser = async (req, res) => {
  const body = req.body;
  const email = req.body.email;
  const password = req.body.password;

  console.log(body);

  const findUser = await userService.findUser(email);

  console.log(findUser);

  if (!findUser) {
    res.status(500).json({
      message: "Admin not found",
    });
  } else {
    if (password === findUser.password) {
      let data = {
        _id: findUser._id,
        email: findUser.email,
        contactNumber: findUser.contactNumber,
        role: findUser.role,
      };

      const token = createToken(data);
      console.log("Generated Token:", token);

      res.cookie("login_token", token);

      res.status(200).json({
        message: "login success",
      });
    } else {
      res.status(500).json({
        message: "Enter valid password",
      });
    }
  }
};

/* UPDATE USER */

/* DELETE USER */

module.exports = { getUser, getProfile, addUser, loginUser };
