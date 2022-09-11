"use strict";
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db");

const Friend = require("../fiend/model");

const User = sequelize.define("Users", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(Friend);
Friend.belongsTo(User);

module.exports = User;
