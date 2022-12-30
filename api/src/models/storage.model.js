const { Schema, model } = require("mongoose");

const storageSchema = new Schema(
  {
    path: {
      type: String,
    },
    filename: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = { storageSchema };
