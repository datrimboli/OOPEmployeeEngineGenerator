// TODO: Write code to define and export the Employee class
function Employee(name, id, email, isGood) {
  this.name = name
  this.id = id
  this.email = email
  this.isGood = isGood || true
  this.getName = function () {
    return this.name
  }
  this.getId = function () {
    return this.id
  }
  this.getEmail = function () {
    return this.email
  }
}

module.exports = Employee