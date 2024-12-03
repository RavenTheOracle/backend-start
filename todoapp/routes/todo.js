const express = require("express");

const router = express.Router();

// Import controllers
const getTodo = require("../controllers/getTodo.js");
const createTodo = require("../controllers/createTodo.js");
const getTodoById = require("../controllers/getTodo.js"); // Corrected import
const updateTodo = require("../controllers/updateTodo.js");
const deleteTodo = require("../controllers/deleteTodo.js");

// Define API routes
// Map path to controller
router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodoById/:id", getTodoById); // Correct import
router.put("/updateTodo/:id", updateTodo); // Added leading slash
router.delete("/deleteTodo/:id", deleteTodo); // Added leading slash

module.exports = router;
