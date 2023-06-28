const express = require("express");
const router = express.Router();

const {
  restaurantRegister,
  getAllRestaurants,
  getRestaurantById,
  deleteRestaurant,
  updateRestaurant,
} = require("../controllers/restaurant");

/**
 * @desc : register
 * @path : '/register'
 * @method : POST
 * @data : req.body
 */
router.post("/register", restaurantRegister);

/**
 * @desc : getAllRestaurants
 * @path : '/getall'
 * @method : GET
 * @data : req.body
 */
router.get("/getall", getAllRestaurants);

/**
 * @desc : getRestaurantById
 * @path : '/getrestaurant'
 * @method : GET
 * @data : req.params
 */
router.get("/getone/:_id", getRestaurantById);

/**
 * @desc : deleteRestaurant
 * @path : '/delete'
 * @method : DELETE
 * @data : req.params
 */
router.delete("/delete/:_id", deleteRestaurant);

/**
 * @desc : updateRestaurant
 * @path : '/updateRestaurant'
 * @method : UPDATE
 * @data : req.params and req.body
 */
router.put("/update/:_id", updateRestaurant);

module.exports = router;
