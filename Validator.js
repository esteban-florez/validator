import Control from './Control.js'
import Rules from './Rules.js'

const Validator = {
  controls: new Map(),
  init: function (rules) {
    for (const name in rules) {
        this.controls.set(name, new Control(name, rules[name]))
    }

    this.setInitialListeners()
    return this
  },
  setInitialListeners: function () {
    // in progress
    return this
  },
  evaluateRules: function (control) {
    control.passes = control.rules.every(rule => {
      const [ name, params ] = rule.split(':')

      const value = control.getValue()

      if (params ?? false) {
        const paramsArray = params.split(',')
        return Rules[name](value, ...paramsArray)
      }

      return Rules[name](value)
    })
    
    control.update()
    return this
  },
}

export default Validator