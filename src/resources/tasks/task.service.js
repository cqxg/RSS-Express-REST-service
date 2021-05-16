const tasksRepo = require('./task.memory.repository');

const create = board => tasksRepo.create(board);
const update = board => tasksRepo.update(board);
const getAll = boardId => tasksRepo.getAll(boardId);
const getOne = (boardId, taskId) => tasksRepo.getOne(boardId, taskId);
const remove = (boardId, taskId) => tasksRepo.remove(boardId, taskId);

module.exports = { getAll, getOne, create, update, remove };
