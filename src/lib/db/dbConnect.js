import mongoose from "mongoose";

export async function dbConnect() {
  let isConnected = false;
  if (isConnected) "Db connected";

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log("db connected");

    if (db.connection.readyState === 1) isConnected = true;
  } catch (error) {
    console.log(error);
  }
}
