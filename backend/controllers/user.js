const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// register
exports.userRegister = async (req, res) => {
  try {
    const { nom, prenom, email, password, ville, telephone } = req.body;

    //check if email exist
    const userCheck = await User.findOne({ email });
    if (userCheck) {
      return res.status(400).send({
        error: [
          { msg: "email already exist, you can't sign up with it. !!!! " },
        ],
      });
    }

    //instance of model
    const newUser = new User({
      nom,
      prenom,
      email,
      password,
      ville,
      telephone,
    });

    //hash password
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);
    newUser.password = hashedPassword;

    //save patient to DB
    await newUser.save();

    //token
    const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY, {
      expiresIn: "24h",
    });

    return res
      .status(200)
      .send({ msg: "Register success...", user: newUser, token });
  } catch (error) {
    return res.status(400).send({ errors: [{ msg: "Register fail !!!! " }] });
  }
};

// login
exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if email
    const userToCheck = await User.findOne({ email });
    if (!userToCheck) {
      return res.status(400).send({ error: [{ msg: "Bad credentials !!! " }] });
    }

    // check password
    const validPassword = await bcrypt.compare(password, userToCheck.password);
    if (!validPassword) {
      return res.status(400).send({ error: [{ msg: "Bad credentials !!! " }] });
    }

    //token
    const token = jwt.sign({ id: userToCheck._id }, process.env.SECRET_KEY, {
      expiresIn: "24h",
    });

    return res
      .status(200)
      .send({ msg: "login successfully", user: userToCheck, token });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

// get all users
exports.getAllUsers = async (req, res) => {
  try {
    const userslist = await User.find();
    return res
      .status(200)
      .json({ message: "Users load successfuly", userslist });
  } catch (error) {
    return res.status(500).json({ message: "Users load failed", error });
  }
};

// get user by id
exports.getUserById = async (req, res) => {
  try {
    const _id = req.params;
    const userToFind = await User.findOne({ _id });
    if (!userToFind) {
      return res.status(400).json({ message: "User not found" });
    }
    return res
      .status(200)
      .json({ message: "User load successfuly", userToFind });
  } catch (error) {
    return res.status(400).json({ message: "User load failed", error });
  }
};

// delete user
exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params;
    await User.deleteOne({ _id: userId });
    res.status(200).json({ message: "User deleted successfuly" });
  } catch (error) {
    res.status(400).json({ message: "User deleted failed", error });
  }
};

// update user
exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const newUser = req.body;
    const result = await User.updateOne({ userId }, { $set: { ...newUser } });
    if (result.modifiedCount === 0) {
      return res.status(400).json({ message: "User already exist !!!!" });
    }
    res
      .status(200)
      .json({ message: "User updated successfuly", result, newUser });
  } catch (error) {
    res.status(400).json({ message: "User updated failed", error });
  }
};

exports.currentUser = (req, res) => {
 return res.send(req.user);
};
