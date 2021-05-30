const DB = require('../../common/inMemoryDb');

/**
 * Returns the result of execution of the getAllTasks method
 * @param {string} boardId board id
 * @returns {function(): Array.<Task>} all tasks
 */
const getAll = async (boardId) => DB.getAllTasks(boardId);

/**
 * Returns the result of execution of the getTask method
 * @param {string} boardId board id
 * @param {string} id task id
 * @returns {function(): Task} found Task
 */
const getOne = async (boardId, id) => {
  const task = await DB.getTask(boardId, id);
  if (!task) throw new Error(`The task with id: ${task} was not found`);
  return task;
};

/**
 * Returns the result of execution of the createTask method
 * @param {Task} task Task instance
 * @returns {function(): Task} Task instance
 */
const create = async (task) => DB.createTask(task);

/**
 * Returns the result of execution of the updateTask method
 * @param {Task} task Task instance
 * @returns {function(): Task} Task instance
 */
const update = async (task) => DB.updateTask(task);

/**
 * Returns the result of execution of the removeTask method
 * @param {string} boardId board id
 * @param {string} id task id
 * @returns {boolean} task match
 */
const remove = async (boardId, id) => DB.removeTask(boardId, id);

module.exports = { getAll, getOne, create, update, remove };
