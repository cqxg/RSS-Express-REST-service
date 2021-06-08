const DB = require('../../common/inMemoryDb');

/**
 * Returns the result of execution of the getAllBoards method
 * @returns {function(): Array.<Board>} all boards
 */
const getAll = async () => DB.getAllBoards();

/**
 * Returns the result of execution of the getBoard method
 * @param {string} id board id
 * @returns {function(): Board} found board
 */
const getOne = async (id) => {
  const board = await DB.getBoard(id);
  if (!board) throw new Error(`The board with id: ${board} was not found`);
  return board;
};

/**
 * Returns the result of execution of the createBoard method
 * @param {Board} board Board instance
 * @returns {function(): Board} Board instance
 */
const create = async (board) => DB.createBoard(board);

/**
 * Returns the result of execution of the updateBoard method
 * @param {Board} board Board instance
 * @returns {function(): Board} Board instance
 */
const update = async (board) => DB.updateBoard(board);

/**
 * Returns the result of execution of the removeBoard method
 * @param {string} id board id
 * @returns {boolean} board match
 */
const remove = async (id) => DB.removeBoard(id);

module.exports = { getAll, getOne, create, update, remove };
