const model = require("../models/user.model");
const { messages } = require("../utils/errorMessage");
const usermodel = model.UserModel;

class UserService {
  constructor() {}
  async create(user) {
    const responseAdd = await usermodel.create(user);
    return {
      messages: messages.created,
      data: responseAdd,
    };
  }

  async getAll() {
    const count = await usermodel.countDocuments({
      deleted: { $exists: false },
    });
    const response = await usermodel.find({ deleted: null });
    return {
      message: `${messages.count} ${count}`,
      data: response,
    };
  }

  async findOne(id) {
    const response = await usermodel.findById(id);
    return response;
  }

  async findByMail(email) {
    const response = await usermodel.findOne({ email });
    return response;
  }

  async updateOne(id, data) {
    const response = await usermodel.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    );
    return {
      message: messages.updated,
      data: response,
    };
  }

  async deleteOne(id) {
    await usermodel.findByIdAndUpdate(
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

module.exports = { UserService };
