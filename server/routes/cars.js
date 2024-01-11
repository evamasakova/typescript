const express = require("express");
const router = express.Router();

const carsController = require("../controllers/cars");

/**
 * returns all cars
 * URL: http://localhost:3000/cars
 * Method: GET
 */
router.get("/", carsController.getAllCars);

/**
 * returns one car by id
 * URL: http://localhost:3000/cars/iharikbkjkjoih565es51fes
 * aka: URL: http://localhost:3000/cars/id
 * Method: GET
 * req.params.id - id z URL
 * req - pozadavek od uzivatele
 * res - odpoved od serveru
 */
router.get("/:id", carsController.getCarById);

/**
 * add a car
 * URL: http://localhost:3000/cars
 * Method: POST
 */
router.post("/", carsController.createCar);

/**
 * update car
 * URL: http://localhost:3000/cars/id
 * Method: PUT
 */
router.put("/:id", carsController.updateCar);

/**
 * delete car
 * URL: http://localhost:3000/cars/id
 * Method: DELETE
 */
router.delete("/:id", carsController.deleteCar);

module.exports = router;
