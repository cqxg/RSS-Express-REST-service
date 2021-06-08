const tasksRepo = require('./task.memory.repository');

/**
 * Returns the result of execution of the create method
 * @param {Board} board Board instance
 * @returns {function(): Task} Task instance
 */
const create = (board) => tasksRepo.create(board);

/**
 * Returns the result of execution of the update method
 * @param {Board} board Board instance
 * @returns {function(): Task} Task instance
 */
const update = (board) => tasksRepo.update(board);

/**
 * Returns the result of execution of the getAll method
 * @param {string} boardId board id
 * @returns {function(): Array.<Task>} all tasks
 */
const getAll = (boardId) => tasksRepo.getAll(boardId);

/**
 * Returns the result of execution of the getOne method
 * @param {string} boardId board id
 * @param {string} taskId task id
 * @returns {function(): Task} found Task
 */
const getOne = (boardId, taskId) => tasksRepo.getOne(boardId, taskId);

/**
 * Returns the result of execution of the remove method
 * @param {string} boardId board id
 * @param {string} taskId task id
 * @returns {boolean} task match
 */
const remove = (boardId, taskId) => tasksRepo.remove(boardId, taskId);

module.exports = { getAll, getOne, create, update, remove };
