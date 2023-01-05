const accountModel = require("../models/accounts.model");
const { messages } = require("../utils/errorMessages");
const model = accountModel.AccountModel;

class CashflowsServices {
  constructor() {}
  async create(item) {
    const response = await model.create(item);
    return {
      messages: messages.created,
      data: response,
    };
  }

  async find() {
    const count = await model.countDocuments({
      deleted: { $exists: false },
    });
    const response = await model.find({ deleted: null });
    return {
      message: `${messages.count} ${count}`,
      data: response,
    };
  }

  async findOne(id) {
    const response = await model.findById(id);
    return response;
  }

  async update(id, data) {
    const response = await model.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    );
    return {
      message: messages.updated,
      data: response,
    };
  }

  async delete(id) {
    await model.findByIdAndUpdate(
      id,
      {
        deleted: Date.now(),
      },
      { new: true }
    );
    return {
      message: messages.deleted,
    };
  }
}

module.exports = { CashflowsServices };
