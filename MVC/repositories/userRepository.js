// We create a model object, the repository class will return a Promise including an array of this object 
const UserModel = require('../models/userModel'); 

// built-in data
const mockUsers = [
  { id: '1', name: 'Alice', email: 'alice@example.com', active: true, role: 'admin' },
  { id: '2', name: 'Bob', email: 'bob@example.com', active: true, role: 'user' },
  { id: '3', name: 'Charlie', email: 'charlie@example.com', active: false, role: 'user' },
  { id: '4', name: 'John', email: 'john@example.com', active: false, role: 'admin' },
  { id: '5', name: 'Joseph', email: 'joseph@example.com', active: true, role: 'user' }
];


class UserRepository {

  constructor() {
    this.userModel = new UserModel();
    this.getAll = this.getAll.bind(this);
  }


  async getAll() {
    return new Promise((resolve) => {
      setTimeout(() => {
          resolve(mockUsers);
      }, 50);
    });
  }
}

module.exports = UserRepository;