import mongoose from "mongoose";

export const handlerDbConnection = (url) => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to MongoDB successfully");
    })
    .catch((error) => console.error("Error connecting to MongoDB:", error));
};
