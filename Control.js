function Control(element, rules) {
  this.element = element
  this.rules = rules
  this.name = element.getAttribute('name')
  this.focused = false
  this.passes = false
  this.errorSelector = `error-${this.name}`
  
  this.update = function () {
    let previousAlert = document.querySelector(this.errorSelector)
      
    let alert = document.createElement('small')
        .setAttribute('class', 'text-red-400')
        .setAttribute('id', `error-${this.errorSelector}`)
    
    if (this.passes) {
      element.classList.remove('validator-fails')
      element.classList.add('validator-passes')
      previousAlert?.remove()
      return this
    }

    element.classList.remove('validator-passes')
    element.classList.add('validator-fails')
    
    if (!previousAlert) {
      alert.innerText = 'Error de validación'
      this.element.parentElement.append(alert)
      return this
    }

    previousAlert.innerText = 'Nuevo error de validación'
    return this
  }
}

export default Control