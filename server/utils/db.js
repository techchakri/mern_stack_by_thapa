const mongoose = require("mongoose");
const URI = "mongodb+srv://chakrijallu7:chakrijallu7@mernstack.vywdcyv.mongodb.net/?retryWrites=true&w=majority";
const connectDb = async () => {
    try {
        const dbInstance = await mongoose.connect(URI);
        console.log("connection successful to DB");
    } catch (error) {
        console.error("database connection failed");
        process.exit(0);
    }
}

module.exports = connectDb;