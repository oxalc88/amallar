const { Schema, model } = require("mongoose");

const originSchema = require("./origin.model");

const AccountSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    origin: originSchema,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const AccountModel = model("account", AccountSchema);

module.exports = { AccountModel };
