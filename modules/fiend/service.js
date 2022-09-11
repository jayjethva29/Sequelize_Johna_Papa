const Friend = require("./model");

exports.create = async (data) => {
  return Friend.create(data);
};

exports.getAll = async () => {
  return Friend.findAll();
};

exports.get = async (id) => {
  return Friend.findOne({
    where: { id },
  });
};

exports.update = async (id, data) => {
  return Friend.update(data, { where: { id } });
};

exports.remove = async (id) => {
  return Friend.destroy({ where: { id } });
};
