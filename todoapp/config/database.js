const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connection Successful");
    } catch (error) {
        console.error("MongoDB Connection Unsuccessful:", error.message);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = dbConnect;
