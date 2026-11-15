const UserService = require('../services/userService');

class UserController {

  constructor() {
    this.userService = new UserService();
    this.listUsers = this.listUsers.bind(this);
  }

  async listUsers(req, res, next) {

    try {
      
      // We retrieve the data via the Service class
      const showActive = req.query.active !== 'false';
      const users = await this.userService.getUsersForList(showActive);

      // If React makes the request using fetch(), we return only the data in JSON format
      if (req.headers.accept && req.headers.accept.includes('application/json')) {

        return res.json({ 
          usersList: users, 
          showingActive: showActive 
        });
      }

      // If it is the first visit from the browser, we render the view
      res.render('userView', { 
        title: 'Users - My Testing Web Site',
        usersList: users,
        showingActive: showActive
      });

    } catch (error) {
        // The next function is a built-in Express tool. 
        // By passing the error parameter to it, Express halts the normal execution of the current route 
        // and jumps directly to the error-handling middleware configured at the end of app.js.
        next(error); 
    }
  }
}

module.exports = UserController;