
// Require bringing in Employee
const Employee = require('./Employee.js')
// Engineer building on Employee
class Engineer extends Employee {
  // Adding github to the pre-existing parameters
  constructor(name, id, email, github) {
    super(name, id, email)
    this.github = github
  }
  // Returning github
  getGithub() {
    return this.github
  }
  // Returning Engineer
  getRole() {
    return 'Engineer'
  }
}

// Exporting Engineer to feed main
module.exports = Engineer
