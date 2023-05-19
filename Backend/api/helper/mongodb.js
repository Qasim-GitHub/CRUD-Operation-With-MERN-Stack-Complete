const mongoose = require("mongoose");

url =
  "mongodb+srv://qasim:qasim@cluster0.9ypidps.mongodb.net/?retryWrites=true&w=majority";

const conectionDb = () => {
  console.log("DB is connected");
  mongoose.set("strictQuery", false);
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
module.exports = conectionDb;
