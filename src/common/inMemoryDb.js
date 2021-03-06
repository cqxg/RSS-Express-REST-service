const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');

const DB = {
  users: [],
  boards: [],
  tasks: [],
};

DB.users.push(new User(), new User(), new User());
DB.boards.push(new Board(), new Board(), new Board());
DB.tasks.push(new Task(), new Task(), new Task());

// ------------------------------ GET ALL ------------------------------

/**
 * Returns an array of all users
 * @returns {Array.<User>} array of all users
 */
const getAllUsers = async () => [...DB.users];

/**
 * Returns an array of all boards
 * @returns {Array.<Board>} array of all boards
 */
const getAllBoards = async () => [...DB.boards];

/**
 * Returns an array of all tasks
 * @returns {Array.<Task>} array of all tasks
 */
const getAllTasks = async (boardId) =>
  DB.tasks.filter((item) => item.boardId === boardId);

// ------------------------------ GET ONE ------------------------------

/**
 * Returns user by id
 * @param {string} id user id
 * @returns {User} found User
 */
const getUser = async (id) => DB.users.filter((item) => item.id === id)[0];

/**
 * Returns board by id
 * @param {string} id board id
 * @returns {Board} found Board
 */
const getBoard = async (id) => DB.boards.filter((item) => item.id === id)[0];

/**
 * Returns task by id
 * @param {string} boardId board id
 * @param {string} id task id
 * @returns {Task} found Task
 */
const getTask = async (boardId, id) =>
  DB.tasks.find((item) => item.boardId === boardId && item.id === id);

// ------------------------------ UPDATE ------------------------------

/**
 * Returns updated user
 * @param {object} user object with user params
 * @param {string} user.id user id
 * @returns {User} updated User
 */
const updateUser = async (user) => {
  const { id } = user;
  const curr = DB.users.findIndex((item) => item.id === id);
  if (curr > -1) {
    DB.users = [...DB.users.slice(0, curr), user, ...DB.users.slice(curr + 1)];
    return true;
  }
  return false;
};

/**
 * Returns updated board
 * @param {object} board object with board params
 * @param {string} board.id board id
 * @returns {Board} updated Board
 */
const updateBoard = async (board) => {
  const { id } = board;
  const curr = DB.boards.findIndex((item) => item.id === id);
  if (curr > -1) {
    DB.boards = [
      ...DB.boards.slice(0, curr),
      board,
      ...DB.boards.slice(curr + 1),
    ];
    return true;
  }
  return false;
};

/**
 * Returns updated task
 * @param {object} task object with task params
 * @param {string} task.boardId board id
 * @param {string} task.id task id
 * @returns {Task} updated Task
 */
const updateTask = async (task) => {
  const { id, boardId } = task;
  const curr = DB.tasks.findIndex(
    (item) => item.id === id && item.boardId === boardId
  );
  if (curr > -1) {
    DB.tasks = [...DB.tasks.slice(0, curr), task, ...DB.tasks.slice(curr + 1)];
    return true;
  }
  return false;
};

// ------------------------------ CREATE ------------------------------

/**
 * Returns a new user
 * @param {User} user user instance
 * @returns {User} new User
 */
const createUser = async (user) => {
  DB.users.push(user);
  return user;
};

/**
 * Returns a new board
 * @param {Board} board board instance
 * @returns {Board} new Board
 */
const createBoard = async (board) => {
  DB.boards.push(board);
  return board;
};

/**
 * Returns a new task
 * @param {Task} task task instance
 * @returns {Task} new Task
 */
const createTask = async (task) => {
  DB.tasks.push(task);
  return task;
};

// ------------------------------ REMOVE ------------------------------

/**
 * Returns boolean (remove user if id matches)
 * @param {string} id user id
 * @returns {boolean} matching user id
 */
const removeUser = async (id) => {
  const curr = DB.users.findIndex((item) => item.id === id);
  if (curr > -1) {
    DB.users = DB.users.filter((item) => item.id !== id);
    DB.tasks = DB.tasks.map((item) =>
      item.userId === id ? { ...item, userId: null } : item
    );
    return true;
  }
  return false;
};

/**
 * Returns boolean (remove board if id matches)
 * @param {string} id board id
 * @returns {boolean} matching board id
 */
const removeBoard = async (id) => {
  const curr = DB.boards.findIndex((item) => item.id === id);
  if (curr > -1) {
    DB.boards = DB.boards.filter((item) => item.id !== id);
    DB.tasks = DB.tasks.filter((item) => item.boardId !== id);
    return true;
  }
  return false;
};

/**
 * Returns boolean (remove task if id matches)
 * @param {string} id task id
 * @param {string} boardId board id
 * @returns {boolean} matching task id
 */
const removeTask = async (boardId, id) => {
  const curr = DB.tasks.findIndex((item) => item.id === id);
  if (curr > -1) {
    DB.tasks = DB.tasks.filter((item) => item.id !== id);
    return true;
  }
  return false;
};

module.exports = {
  getUser,
  getAllUsers,
  createUser,
  updateUser,
  removeUser,
  getBoard,
  getAllBoards,
  createBoard,
  updateBoard,
  removeBoard,
  getTask,
  getAllTasks,
  createTask,
  updateTask,
  removeTask,
};
