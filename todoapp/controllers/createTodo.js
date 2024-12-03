const Todo = require("../models/Todo.js");

// Route handler
const createTodo = async (req, res) => {
    try {
        // Extract title and description
        const { title, description } = req.body;

        // Create new Todo object and insert in database
        const response = await Todo.create({ title, description });

        // Send JSON response
        res.status(200).json({
            success: true,
            data: response,
            message: "Entry Created Successfully",
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: err.message,
        });
    }
};

// Export the function as default
module.exports = createTodo;
