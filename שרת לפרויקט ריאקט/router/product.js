const express = require('express');
const router = express.Router();
const controllerProduct = require('../controller/product')


router.get("/", controllerProduct.get);
router.get("/:id", controllerProduct.getById);
router.post("/", controllerProduct.post);
router.put('/:id', controllerProduct.update); // Add this line for updating
module.exports = router;