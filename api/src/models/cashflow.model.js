const { Schema, model } = require("mongoose");

const storageSchema = require("./storage.model");

const CashFlowSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["ingreso", "salida"],
    },
    ammount: {
      type: Number,
      required: true,
      default: 0,
      validate: {
        validator: function (value) {
          return !this.isNaN(this.parseFloat(value));
        },
        message: `${value} is not a valid saldo`,
      },
    },
    operationProof: storageSchema,
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    account: {
      type: Schema.Types.ObjectId,
      ref: "account",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const CashflowModel = model("cashflow", CashFlowSchema);

module.exports = { CashflowModel };
