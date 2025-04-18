const User = require("../models/User");
const jwt = require("jsonwebtoken");

//GENERATE JWT Token

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

//Register User
exports.registerUser = async (req, res) => {
  const { fullName, email, password, profileImageUrl } = req.body;

  //   Validation: Check for missing field

  if (!fullName || !email || password) {
    return res.status(400).json({ message: "All field are required" });
  }

  try{
    //Check if email already exists

    const existingUser = await User.findOne({email})
    if(existingUser) {
        return res.status(400).json({message:"Email already in use"})
    }
  }
};

//Login User
exports.loginUser = async (req, res) => {};

//Get User Info
exports.getUserInfo = async (req, res) => {};
