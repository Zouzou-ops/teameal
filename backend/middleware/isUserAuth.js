const jwt = require("jsonwebtoken");
const User = require("../models/user");

const isUserAuth = async (req, res, next) => {
  try {
    // get token from header
    const token = req.headers["authorization"];
    // check if token
    if (!token) {
      return res.status(400).send({ errors: [{ msg: "unauthorized !!! " }] });
    }
    // decode token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    // check if user exist
    const userToFind = await User.findById({ _id: decoded.id });
    if (!userToFind) {
      return res.status(400).send({ errors: [{ msg: "unauthorized !!! " }] });
    }
    // user exist
    req.user = userToFind;
    next();
  } catch (error) {
    return res.status(400).send({ errors: [{ msg: "unauthorized !!! " }] });
  }
};

module.exports = isUserAuth;
