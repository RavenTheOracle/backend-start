const Todo = require("../models/Todo.js");

// Route handler
const updateTodo = async (req, res) => {
    try {
        const { id } = req.params; // Extract ID from params
        const { title, description } = req.body; // Extract fields from request body

        // Update the todo
        const todo = await Todo.findByIdAndUpdate(
            id, // ID of the todo to update
            { title, description, updatedAt: Date.now() }, // Fields to update
            { new: true } // Return the updated document
        );

        // Check if the todo exists
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }

        // Send JSON response
        res.status(200).json({
            success: true,
            data: todo, // Return updated data
            message: "Todo updated successfully",
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

// Export the function
module.exports = updateTodo;
