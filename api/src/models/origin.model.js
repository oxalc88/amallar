const { Schema } = require("mongoose");

const OriginSchema = new Schema(
  {
    origin: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = { OriginSchema };
