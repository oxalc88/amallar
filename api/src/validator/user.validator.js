const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorCreate = [
  check("username").exists().notEmpty().isLength({ min: 3 }),
  check("name").exists().notEmpty().isLength({ min: 2 }),
  check("lastname").exists().notEmpty().isLength({ min: 2 }),
  check("password").exists().notEmpty().isLength({ min: 5 }),
  check("email").exists().notEmpty().isEmail(),
  check("deleted").isDate().optional({ nullable: true }),
  (req, res, next) => validateResults(req, res, next),
];

module.exports = { validatorCreate };
