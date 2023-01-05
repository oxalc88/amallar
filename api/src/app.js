require("dotenv").config;

/* PACKAGES */
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

/* LOCAL IMPORTS*/
const { dbConnect } = require("./config/mongo");
const config = require("./config/config");
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require("./middlewares/errorHandler");

/* INITIALIZATIONS */
const app = express();

/* MIDDLEWARE */
app.use(morgan("tiny"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("storage"));

/* ROUTES */
app.use("/api", require("./routes"));

/* errors handler*/
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

/* CONNECTION */
dbConnect();
app.listen(config.port, () =>
  console.log(`Server running on port ${config.port}`)
);
