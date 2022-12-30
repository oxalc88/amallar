const { UserService } = require("../services/user.service");
const { httpError } = require("../utils/handleError");

const service = new UserService();

const userController = {
  getItems: async (req, res) => {
    try {
      const users = await service.getAll();
      res.send(users);
    } catch (e) {
      httpError(res, e);
    }
  },

  getItem: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await service.getOne(id);
      res.status(200);
      res.send(item);
    } catch (e) {
      httpError(res, e);
    }
  },

  createItem: async (req, res) => {
    try {
      const { username, name, lastname, password, email } = req.body;
      const user = await service.create({
        username,
        name,
        lastname,
        password,
        email,
      });
      res.status(201);
      res.send(user);
    } catch (e) {
      httpError(res, e);
    }
  },

  updateItem: async (req, res) => {
    try {
      const { id } = req.params;
      const item = req.body;
      const updateItem = await service.updateOne(id, item);
      res.send(updateItem);
    } catch (e) {
      httpError(res, e);
    }
  },

  deleteItem: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await service.deleteOne(id);
      res.send(deleted);
    } catch (e) {
      httpError(res, e);
    }
  },
};

module.exports = { userController };
