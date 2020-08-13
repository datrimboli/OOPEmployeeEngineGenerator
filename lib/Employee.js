// TODO: Write code to define and export the Employee class
function Employee(name, id, plot, isGood) {
  this.name = name
  this.id = id
  this.plot = plot
  this.isGood = isGood || true
  this.getName = function () {
    return this.name
  }
  this.getId = function () {
    return this.id
  }
}

module.exports = Employee