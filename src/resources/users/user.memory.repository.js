const DB = require('../../common/inMemoryDb');

/**
 * Returns the result of execution of the getAllUsers method
 * @returns {function(): Array.<User>} all users
 */
const getAll = async () => DB.getAllUsers();

/**
 * Returns the result of execution of the getUser method
 * @param {string} id user id
 * @returns {function(): User} found user
 */
const getOne = async (id) => {
  const user = await DB.getUser(id);
  if (!user) throw new Error(`The user with id: ${id} was not found`);
  return user;
};

/**
 * Returns the result of execution of the updateUser method
 * @param {User} user User instance
 * @returns {function(): User} User instance
 */
const update = async (user) => DB.updateUser(user);

/**
 * Returns the result of execution of the createUser method
 * @param {User} user User instance
 * @returns {function(): User} User instance
 */
const create = async (user) => DB.createUser(user);

/**
 * Returns the result of execution of the removeUser method
 * @param {string} id user id
 * @returns {boolean} user match
 */
const remove = async (id) => DB.removeUser(id);

module.exports = { getAll, getOne, create, update, remove };
