const Todo = require("../models/Todo.js");

// Route handler
const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;

        // Attempt to find and delete the todo
        const todo = await Todo.findByIdAndDelete(id);

        // Check if the todo exists
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }

        // Successful deletion response
        res.status(200).json({
            success: true,
            data: todo, // Optionally return the deleted document
            message: "Todo deleted successfully",
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
module.exports = deleteTodo;
