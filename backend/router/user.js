const express = require("express");
const router = express.Router();
const {
  userRegister,
  userLogin,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
  currentUser,
} = require("../controllers/user");
const isUserAuth = require("../middleware/isUserAuth");
const {
  registerValidator,
  validations,
  loginValidator,
} = require("../middleware/userValidator");
/**
 * @desc : register
 * @path : '/register'
 * @method : POST
 * @data : req.body
 */
router.post("/register", registerValidator(), validations, userRegister);

/**
 * @desc : login
 * @path : '/login'
 * @method : POST
 * @data : no data
 */
router.post("/login", loginValidator(), validations, userLogin);

/**
 * @desc : getAllUsers
 * @path : '/getallusers'
 * @method : GET
 * @data : req.body
 */
router.get("/getall", getAllUsers);

/**
 * @desc : getcurrentuser
 * @path : '/current'
 * @method : GET
 * @data : no data
 */
router.get("/current",isUserAuth, currentUser);


/**
 * @desc : getUserById
 * @path : '/getuser'
 * @method : GET
 * @data : req.params
 */
router.get("/getone/:_id", getUserById);

/**
 * @desc : deleteUser
 * @path : '/delete'
 * @method : DELETE
 * @data : req.params
 */
router.delete("/delete/:_id", deleteUser);

/**
 * @desc : updateUser
 * @path : '/updateuser'
 * @method : UPDATE
 * @data : req.params and req.body
 */
router.put("/update/:_id", updateUser);

module.exports = router;
