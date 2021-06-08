const boardsRepo = require('./board.memory.repository');

/**
 * Returns the result of execution of the getAll method
 * @returns {function(): Array.<Board>} all boards
 */
const getAll = () => boardsRepo.getAll();

/**
 * Returns the result of execution of the getOne method
 * @param {string} id board id
 * @returns {function(): Board} found Board
 */
const getOne = (id) => boardsRepo.getOne(id);

/**
 * Returns the result of execution of the create method
 * @param {Board} board Board instance
 * @returns {function(): Board} Board instance
 */
const create = (board) => boardsRepo.create(board);

/**
 * Returns the result of execution of the update method
 * @param {Board} board Board instance
 * @returns {function(): Board} Board instance
 */
const update = (board) => boardsRepo.update(board);

/**
 * Returns the result of execution of the remove method
 * @param {string} id board id
 * @returns {boolean} board match
 */
const remove = (id) => boardsRepo.remove(id);

module.exports = { getAll, getOne, create, update, remove };
