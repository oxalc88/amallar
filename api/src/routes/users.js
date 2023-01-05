const { userController } = require("../controllers/user.controller");
const { validatorCreate } = require("../validator/user.validator");

/* REQUIRED */
const router = require("express").Router();

router.get("/", userController.getItems);

router.get("/:id", userController.getItem);

router.post("/", validatorCreate, userController.createItem);

router.patch("/:id", userController.updateItem);

router.delete("/:id", userController.deleteItem);

/* ROUTER EXPORT */
module.exports = router;
