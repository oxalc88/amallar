const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    deleted: {
      type: Date,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = model("user", UserSchema);

module.exports = { UserModel };
