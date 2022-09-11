"use strict";
const Sequelize = require("sequelize");
const sequelize = require("../../config/db");

const Friend = sequelize.define("Friends", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Friend;
