
// Parent employee class build out
class Employee {
  // Establishing name, id, and email as the constant parameters
  constructor(name, id, email) {
    this.name = name
    this.id = id
    this.email = email
  }
  // Returning name
  getName() {
    return this.name
  }
  // Returning ID
  getId() {
    return this.id
  }
  // Returning Email
  getEmail() {
    return this.email
  }
  // Returning Employee
  getRole() {
    return 'Employee'
  }
}

// Exporting Employee for Manager, Intern, and Engineer to receive
module.exports = Employee
