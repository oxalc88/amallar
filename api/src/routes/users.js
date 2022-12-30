const { userController } = require("../controllers/user.controller");

/* REQUIRED */
const router = require("express").Router();

router.get("/", userController.getItems);

router.get("/:id", userController.getItem);

router.post("/", userController.createItem);

router.patch("/:id", userController.updateItem);

router.delete("/:id", userController.deleteItem);

/* ROUTER EXPORT */
module.exports = router;
