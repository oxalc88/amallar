const { accountController } = require("../controllers/account.controller");

/* REQUIRED */
const router = require("express").Router();

router.get("/", accountController.getItems);

router.get("/:id", accountController.getItem);

router.post("/", accountController.createItem);

router.patch("/:id", accountController.updateItem);

router.delete("/:id", accountController.deleteItem);

/* ROUTER EXPORT */
module.exports = router;
