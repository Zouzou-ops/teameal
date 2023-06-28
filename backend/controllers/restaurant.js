const Restaurant = require("../models/restaurant");

// register
exports.restaurantRegister = async (req, res) => {
  try {
    const { nom, email, adresse, telephone, message } = req.body;

    //check if email exist
    const restaurantCheck = await Restaurant.findOne({ email });
    if (restaurantCheck) {
      return res.status(400).send({
        error: [
          { msg: "You already sended a message. !!!! " },
        ],
      });
    }
    //instance of model
    const newRestaurant = new Restaurant({
      nom,
      email,
      adresse,
      telephone,
      message
    });
    //save restaurant to DB
    await newRestaurant.save();
    return res
      .status(200)
      .send({ msg: "Register success...", restaurant: newRestaurant });
  } catch (error) {
    return res.status(400).send({ errors: [{ msg: "Register fail !!!! " }] });
  }
};
// get all restaurants
exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurantList = await Restaurant.find();
    return res
      .status(200)
      .json({ message: "Restaurants load successfuly", restaurantList });
  } catch (error) {
    return res.status(500).json({ message: "Restaurants load failed", error });
  }
};

// get restaurants by id
exports.getRestaurantById = async (req, res) => {
  try {
    const _id = req.params;
    const restaurantToFind = await Restaurant.findOne({ _id });
    if (!restaurantToFind) {
      return res.status(400).json({ message: "Restaurant not found" });
    }
    return res
      .status(200)
      .json({ message: "Restaurant load successfuly", restaurantToFind });
  } catch (error) {
    return res.status(400).json({ message: "Restaurant load failed", error });
  }
};

// delete Restaurant
exports.deleteRestaurant = async (req, res) => {
  try {
    const restaurantId = req.params;
    await Restaurant.deleteOne({ _id: restaurantId });
    res.status(200).json({ message: "Restaurant deleted successfuly" });
  } catch (error) {
    res.status(400).json({ message: "Restaurant deleted failed", error });
  }
};

// update Restaurant
exports.updateRestaurant = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    const newRestaurant = req.body;
    const result = await Restaurant.updateOne({ restaurantId }, { $set: { ...newRestaurant } });
    if (result.modifiedCount === 0) {
      return res.status(400).json({ message: "Restaurant already exist !!!!" });
    }
    res
      .status(200)
      .json({ message: "Restaurant updated successfuly", result, newRestaurant });
  } catch (error) {
    res.status(400).json({ message: "Restaurant updated failed", error });
  }
};

exports.currentRestaurant = (req, res) => {
  return res.send(req.restaurant);
};
