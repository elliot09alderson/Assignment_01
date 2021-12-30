const mongoose = require("mongoose");

//-----------Connection with Database ----------
const connectDataBase = () => {
  mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    //if Promise Fulfills
    .then((data) => {
      console.log(`mongoDB connected with server: ${data.connection.host}`);
    })
    //if Promise Rejected
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connectDataBase    