const Todo = require("../models/Todo.js");

// Get all todo items
const getTodo = async (req, res) => {
    try {
        const todo = await Todo.find({});
        // Send JSON response
        res.status(200).json({
            success: true,
            data: todo,
            message: "Todo items fetched successfully",
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: null,
            message: err.message,
        });
    }
};

const getTodoById = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await Todo.findById(id);

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }

        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} fetched successfully`,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = getTodoById; // Ensure this is exported correctly
