import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const db = mongoose
  .connect("mongodb://root:admin@localhost:27017/")
  .then(() => console.log("Connected mongo db"))
  .catch((err) => console.error(err));

export default db;
