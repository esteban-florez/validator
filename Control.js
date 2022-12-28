import getValueByType from './getValueByType.js'
import Validator from './Validator.js'

function Control(name, rules) {
  this.hasMultipleElements = () => this.dom instanceof Array
  
  this.searchDom = function () {
    let elements = document.querySelectorAll(`[name="${this.name}"]`)
    
    if (elements.length === 0) {
        throw new Error(
          `No existen elementos con el atributo "name" igual a: "${this.name}"`
        )
    }
  
    if (elements.length === 1) {
      return elements[0]
    }
  
    return [...elements]
  }

  this.defType = function () {
    let element = this.hasMultipleElements() ? this.dom[0] : this.dom

    return element instanceof HTMLSelectElement && element.getAttribute('multiple')
        ? 'multiple'
        : element.getAttribute('type')
  }

  this.name = name
  this.dom = this.searchDom()
  this.type = this.defType()
  this.rules = rules
  this.passes = false
  this.getValue = getValueByType[this.type] ?? getValueByType.default

  
  this.initializeListeners = function () {
    if (this.hasMultipleElements()) {
      this.dom.forEach(el => this.setListeners(el))
    } else {
      this.setListeners(this.dom)
    }

    return this
  }

  this.setListeners = function (element) {
    element.addEventListener('focus', () => Validator.evaluateRules(this))
    element.addEventListener('change', () => Validator.evaluateRules(this))
    element.addEventListener('input', () => Validator.evaluateRules(this))
  }
  
  this.update = function () {
    let element = this.hasMultipleElements()
      ? this.dom[0].parentElement
      : this.dom

    if (this.passes) {
      element.classList.remove('validator-fails')
      element.classList.add('validator-passes')
    } else {
      element.classList.remove('validator-passes')
      element.classList.add('validator-fails')
    }

    return this
  }
}

export default Control