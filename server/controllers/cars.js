const Car = require("../models/cars");

exports.getAllCars = async (req, res) => {
  try {
    const result = await Car.find();

    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Cars found",
        playload: result,
      });
    }
    res.status(500).send({
      msg: "Cars not found",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getCarById = async (req, res) => {
  try {
    const result = await Car.findById(req.params.id);

    if (result) {
      return res.status(200).send({
        msg: "Car foound",
        playload: result,
      });
    }
    res.status(500).send({
      msg: "Car was not found",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createCar = async (req, res) => {
  try {
    const data = new Car({
      name: req.body.name,
      color: req.body.color,
      horsepower: req.body.horsepower,
    });
    const result = await data.save();

    if (result) {
      res.status(200).send({
        msg: "Car created",
        playload: result,
      });
    }
    res.status(500).send({
      msg: "Car was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateCar = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      color: req.body.color,
      horsepower: req.body.horsepower,
    };

    const result = await Car.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Updating car by id",
      });
    }
    res.status(500).send({
      msg: "Car was not updated",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteCar = async (req, res) => {
  try {
    const result = await Car.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Deleting car by id",
      });
    }
    res.status(500).send({
      msg: "Car was not deleted",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
