const { v4: uuid } = require('uuid');

/**
 * class Board
 * @class
 */
class Board {
  /**
   * Constructor of class Board
   * @constructor
   * @typedef {{id: string, title: string, columns: Array.<column>}} board
   * @typedef {{id: string, title: string, order: number}} column
   * @param {object.<string, board>} object
   */
  constructor({ id = uuid(), title = 'BOARD', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map((column) => ({ ...column, id: uuid() }));
  }

  /**
   * Returns the params of the Board
   * @param {Board} board Board instance
   * @returns {object} board params
   */
  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;
