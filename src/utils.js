const builtInClassMethods = Object.getOwnPropertyNames((class Noop {}).prototype)

class Utils {
  getInternalMethods(cls) {
    return Object.getOwnPropertyNames(cls.prototype).reduce((obj, name) => {
      const method = cls.prototype[name]
      if (builtInClassMethods.indexOf(name) !== -1) return obj
      if (typeof (method) !== 'function') return obj
      obj[name] = method
      return obj
    }, {})
  }
}

module.exports = new Utils()
