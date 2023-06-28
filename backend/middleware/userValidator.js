const { body, validationResult } = require("express-validator");

exports.registerValidator = () => [
  body("nom", "nom is required !").notEmpty(),  
  body("prenom", "prenom is required !").notEmpty(),
  body("email", "enter a valid email !").isEmail(),
  body("password", " password must contain at least 6 charac !!").isLength({
    min: 6,
  }),
];

exports.loginValidator = () => [
  body("email", "enter a valid email!").isEmail(),
  body("password", " password must contain at least 6 charac !!").isLength({
    min: 6,
  }),
];

exports.validations = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const validationErrors = errors.array().map((error) => {
      return { msg: error.msg };
    });
    return res.status(400).json({ errors: validationErrors });
  }
  next();
};