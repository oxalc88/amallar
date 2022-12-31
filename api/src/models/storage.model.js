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

const StorageModel = model("storage", storageSchema);

module.exports = { StorageModel };
