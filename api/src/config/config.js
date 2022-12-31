require("dotenv").config();

const config = {
  database_name: process.env.DATABASE_NAME,
  database_pass: process.env.DATABASE_PASS,
  database_cluster: process.env.DATABASE_CLUSTER,
  port: process.env.PORT || 4001,
  public_url: process.env.PUBLIC_URL,
};

module.exports = config;
