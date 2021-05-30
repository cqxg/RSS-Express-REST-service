const usersRepo = require('./user.memory.repository');

/**
 * Returns the result of execution of the getAll method
 * @returns {function(): Array.<User>} all users
 */
const getAll = () => usersRepo.getAll();

/**
 * Returns the result of execution of the getOne method
 * @param {string} id user id
 * @returns {function(): User} found User
 */
const getOne = (id) => usersRepo.getOne(id);

/**
 * Returns the result of execution of the create method
 * @param {User} user User instance
 * @returns {function(): User} User instance
 */
const create = (user) => usersRepo.create(user);

/**
 * Returns the result of execution of the update method
 * @param {User} user User instance
 * @returns {function(): User} User instance
 */
const update = (user) => usersRepo.update(user);

/**
 * Returns the result of execution of the remove method
 * @param {string} id user id
 * @returns {boolean} user match
 */
const remove = (id) => usersRepo.remove(id);

module.exports = { getAll, getOne, create, update, remove };
