require("dotenv").config();

const mongoose = require("mongoose");
const config = require("./config");

// url para conexión con mongo atlas
const dbConnect = () => {
  const DB_URI = `mongodb+srv://${config.database_name}:${config.database_pass}@$${config.database_cluster}`;
  mongoose.set("strictQuery", false);
  mongoose.connect(DB_URI, (err, res) => {
    if (!err) console.log("*** SUCCEEDED CONNECTION ***");
    else console.log("*** CONNECTION ERROR ***");
  });
};

module.exports = { dbConnect };
