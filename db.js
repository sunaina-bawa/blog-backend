const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://sunaina:sunaina1997@cluster0.timl6kp.mongodb.net/?retryWrites=true&w=majority"
);
module.exports = {
  connection,
};
