const { UserModel } = require("../models/user.model");
const { messages } = require("../utils/errorMessages");
const boom = require("@hapi/boom");
const model = UserModel;

class UsersService {
  constructor() {}
  async create(user) {
    const response = await model.create(user);
    return {
      messages: messages.created,
      data: response,
    };
  }

  async getAll() {
    const count = await model.countDocuments({
      deleted: { $exists: false },
    });
    const response = await model.find({ deleted: null });
    if (!count && !response) throw boom.notFound("There is no users");
    return {
      message: `${messages.count} ${count}`,
      data: response,
    };
  }

  async findOne(id) {
    const response = await model.findById(id);
    if (!response) throw boom.notFound("User not found");
    return response;
  }

  async findByMail(email) {
    const response = await model.findOne({ email });
    return response;
  }

  async updateOne(id, data) {
    const response = await model.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    );
    if (!response) throw boom.notFound("User not found");
    return {
      message: messages.updated,
      data: response,
    };
  }

  async deleteOne(id) {
    const response = await model.findByIdAndUpdate(
      id,
      {
        deleted: Date.now(),
      },
      { new: true }
    );
    if (!response) throw boom.notFound("User not found");
    return {
      message: messages.deleted,
    };
  }
}

module.exports = { UsersService };
