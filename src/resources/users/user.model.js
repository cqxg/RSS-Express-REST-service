const uuid = require('uuid').v4;

/**
 * Class User.
 * @class
 */
class User {
  /**
   * Constuctor of class User
   * @constructor
   * @typedef {{id: string, name: string, login: string, password: string}} user
   * @param {object.<string, user>} object
   */
  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
   * Returns the params of the User
   * @param {User} user User instance
   * @returns {object} user params
   */
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
