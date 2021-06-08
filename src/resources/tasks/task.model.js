const { v4: uuid } = require('uuid');

/**
 * class Task
 * @class
 */
class Task {
  /**
   * Constuctor of class Task
   * @constructor
   * @typedef {{id: string, title: string, order: number, description: string, userId: string, boardId: string, columnId: string}} task
   * @param {object.<string, task>} object
   */
  constructor({
    id = uuid(),
    title = 'TASK',
    order,
    description,
    userId,
    boardId,
    columnId,
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  /**
   * Returns the params of the Task
   * @param {Task} task Task instance
   * @returns {object} task params
   */
  static toResponse(task) {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }
}

module.exports = Task;
