const { storageController } = require("../controllers/storage.controller");
const uploadMiddleware = require("../utils/handleStorage");
/* REQUIRED */
const router = require("express").Router();

router.get("/", storageController.getItems);

router.get("/:id", storageController.getItem);

router.post(
  "/",
  uploadMiddleware.single("myFile"),
  storageController.createItem
);

router.patch("/:id", storageController.updateItem);

router.delete("/:id", storageController.deleteItem);

/* ROUTER EXPORT */
module.exports = router;
