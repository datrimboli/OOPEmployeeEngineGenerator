// Require bringing in Employee
const Employee = require('./Employee')
// Intern building on Employee
class Intern extends Employee {
  // Adding school to the pre-existing parameters 
  constructor(name, id, email, school) {
    super(name, id, email)
    this.school = school
  }
  // Returning school
  getSchool() {
    return this.school
  }
  // Returning Intern
  getRole() {
    return 'Intern'
  }
}

// Exporting Intern to feed in main
module.exports = Intern