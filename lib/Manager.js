// Require bringing in Employee
const Employee = require('./Employee')
// Manager building off Employee
class Manager extends Employee {
  // Adding office number to pre-existing parameters
  constructor(name, id, email, officeNumber) {
    super(name, id, email)
    this.officeNumber = officeNumber
  }
  // Returning office number
  getOfficeNumber() {
    return this.officeNumber
  }
  // Returning Manager
  getRole() {
    return 'Manager'
  }
}

// Exporting Manager to feed into main
module.exports = Manager