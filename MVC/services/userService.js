const UserRepository = require('../repositories/userRepository');

class UserService {

  constructor() {
    this.userRepository = new UserRepository();
    this.getUsersForList = this.getUsersForList.bind(this);
  }

  // Method that accesses data through the repository
  async getUsersForList(showActive = true) {

    const allUsers = await this.userRepository.getAll(); 

    return allUsers.filter(user => Boolean(user.active) === showActive);
  }
}

module.exports = UserService;