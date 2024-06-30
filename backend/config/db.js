const mongoose = require("mongoose");

// Function to connect to MongoDB database
const connectDB = async () => {
  try {
    // Establishing connection to MongoDB using MONGO_URI from environment variables
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected : ${conn.connection.host} 😎`); // Logging successful connection
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
