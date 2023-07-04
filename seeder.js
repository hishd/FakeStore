import dotenv from "dotenv";
import users from "./data/UserData.js";
import User from "./model/userModel.js";
import connectDb from "./config/database.js";

dotenv.config();
connectDb();

const importData = async () => {
  try {
    await User.deleteMany();
    await User.insertMany(users);

    console.log("Data Imported successfully!");
    process.exit();
  } catch (error) {
    console.log(`Error: ${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();

    console.log("Data Cleared successfully!");
    process.exit();
  } catch (error) {
    console.log(`Error: ${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
