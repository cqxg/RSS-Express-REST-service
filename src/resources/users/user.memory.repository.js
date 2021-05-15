const { User } = require('./user.model');
const { Task } = require('../tasks/task.model');

const getAll = () => User.find({});

const getUser = (id) => User.findById(id);

const createUser = (user) => new User(user)?.save();

const updateUser = (id, updatedUser) =>
  User.findOneAndUpdate({ _id: id }, updatedUser, {
    new: true,
  });

const deleteUser = async (id) => {
  await Task.updateMany({ userId: id }, { userId: null });
  await User.findByIdAndDelete(id);

  return 'User and user tasks have been deleted';
};

module.exports = {
  getAll,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
