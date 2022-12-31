const { AccountService } = require("../services/accounts.service");
const { httpError } = require("../utils/handleError");

const service = new AccountService();

const accountController = {
  getItems: async (req, res) => {
    try {
      const items = await service.getAll();
      res.send(items);
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
      const { id } = req.params;
      const { description, origin } = req.body;
      const item = await service.create({
        description,
        origin,
        id,
      });
      res.status(201);
      res.send(item);
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
      const item = await service.deleteOne(id);
      res.send(item);
    } catch (e) {
      httpError(res, e);
    }
  },
};

module.exports = { accountController };
