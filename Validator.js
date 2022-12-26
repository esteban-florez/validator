import Control from './Control.js'
import Rules from './Rules.js'

const Validator = {
  controls: new Map(),
  init: function (rules) {
    for (const name in rules) {
      const element = document.querySelector(`[name="${name}"]`)
      this.controls.set(
        name,
        new Control(element, rules[name])
      )
    }

    this.setInitialListeners()
    return this
  },
  setInitialListeners: function () {
    this.controls.forEach(control => {
      const { element } = control
      element.addEventListener('focus', () => this.evaluateRules(control))
      element.addEventListener('input', () => this.evaluateRules(control))
      element.addEventListener('change', () => this.evaluateRules(control))
    })
    return this
  },
  evaluateRules: function (control) {
    control.passes = control.rules.every(rule => {
      
      const value = this.prepareValue(control)
      
      const [ name, params ] = rule.split(':')
      
      if (params ?? false) {
        const paramsArray = params.split(',')
        return Rules[name](value, ...paramsArray)
      }

      return Rules[name](value)
    })
    
    control.update()
    return this
  },
  prepareValue: function ({ element }) {
    const value = element.value.trim()
    return value
  }
}

export default Validator