const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const deleteUserByEmailPassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await User.deleteOne({ email, password });
    if (result.deletedCount)
      res.status(200).json({ result, msg: "user Deleted" });
    else res.status(200).json({ result, msg: "user cannot Deleted" });
  } catch (err) {
    res.status(400).json({ err });
  }
};

const createNewUser = async (req, res) => {
  try {
    const { body } = req;
    const { name, email, password, type } = body;
    console.log(name, email, password, type);
    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: encryptedPassword,
      type,
    });
    console.log({ user });
    res.status(200).json({ user });
  } catch (err) {
    res.status(400).json({ err });
  }
};

const signIn = async (req, res) => {
  try {
    console.log("hjihjb");
    const { email, password } = req.body;

    const user = await User.findOne({ email }).lean();
    if (user) {
      const { password: savedPassword, ...userData } = user;
      const isVerifyPassword = await bcrypt.compare(password, savedPassword);
      if (isVerifyPassword) {
        const token = jwt.sign({ user }, process.env.JWT_SECRET);
        res
          .status(200)
          .cookie(process.env.JWT_SECRET_KEY, token, {
            httpOnly: true,
            // maxAge:20000, 1
          })
          .json({ userData, msg: "User Sucessfully Logged In" });
      } else {
        res.status(401).json({ msg: "Invalid Password" });
      }
    } else {
      res.status(401).json({ msg: "Invalid Email" });
    }
  } catch (err) {
    res.status(400).json({ err });
  }
};

module.exports = {
  deleteUserByEmailPassword,
  createNewUser,
  signIn,
};
