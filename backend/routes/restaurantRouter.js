const express = require('express');
const restaurantRouter = express.Router();
const { newMenuItem } = require("../controllers/menuController");
const RestaurantsListController = require('../controllers/restaurantListController');
const SingleRestuarntsController = require('../controllers/singleRestaurantController');

restaurantRouter.get('/restaurantsList', RestaurantsListController.getDineinRestaurants);
restaurantRouter.get('/deliveryList', RestaurantsListController.getDeliveryRestaturants);
restaurantRouter.get('/:placeId', SingleRestuarntsController.getRestaurantByPlaceId);
restaurantRouter.post("/addMenuItem", newMenuItem);


module.exports = restaurantRouter;
