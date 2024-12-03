const express = require("express")

const router = express.Router();

//import controller

const createTodo = require("../controllers/createTodo");

//define api routes
//map path to controller
router.post("/createTodo",createTodo);

module.exports = router;