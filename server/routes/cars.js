const express = require('express');
const router = express.Router();


/** 
 * returns all cars
 * URL: http://localhost:3000/cars
 * Method: GET
 */
router.get('/', (req, res) => {
    res.send({
        msg: "Returning all cars"
    })
});


/** 
 * returns one car by id
 * URL: http://localhost:3000/cars/iharikbkjkjoih565es51fes
 * aka: URL: http://localhost:3000/cars/id
 * Method: GET
 * req.params.id - id z URL
 * req - pozadavek od uzivatele
 * res - odpoved od serveru
 */
router.get('/:id', (req, res) => {
    res.send({
        msg: "Returning car",
        id: req.params.id
    })
});



/** 
 * add a car
 * URL: http://localhost:3000/cars
 * Method: POST
 */
router.post('/', (req, res) => {
    res.send({
        msg: "Adding a car"
    })
});


/** 
 * update car
 * URL: http://localhost:3000/cars/id
 * Method: PUT
 */
router.put('/:id', (req, res) => {
    res.send({
        msg: "Updating car by id",
        id: req.params.id
    })
});


/** 
 * delete car
 * URL: http://localhost:3000/cars/id
 * Method: DELETE
 */
router.delete('/:id', (req, res) => {
    res.send({
        msg: "Deleting car by id"
    })
});



module.exports = router;
