const getValueByType = {
  checkbox: function () {
    return this.dom.checked 
      ? this.dom.value.trim() 
      : null 
  },
  radio: function () {
    return [...this.dom].find(radio => radio.checked)?.value.trim() ?? null
  },
  select: function () {
    return this.dom.selectedIndex !== -1 
      ? this.dom.value.trim() 
      : null
  },
  multiple: function () {
    return this.dom.selectedIndex !== -1 
      ? [...this.dom.selectedOptions].map(opt => opt.value.trim()) 
      : null
  },
  default: function () {
    return this.dom.value.trim()
  },
}

function Control(name, rules) {
  this.name = name
  this.dom = this.searchDom()
  this.type = this.defType()
  this.rules = rules
  this.passes = false
  this.getValue = getValueByType[this.type] ?? getValueByType.default

  this.defType = function () {
    let element = this.dom instanceof Array ? this.dom[0] : this.dom

    return element instanceof HTMLSelectElement && element.getAttribute('multiple')
        ? 'multiple'
        : element.getAttribute('type')
  }

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
  
  this.update = function () {    
    if (this.passes) {
      this.elements.forEach(element => {
        element.classList.remove('validator-fails')
        element.classList.add('validator-passes')
      })

      return this
    }

    this.elements.forEach(element => {
      element.classList.remove('validator-passes')
      element.classList.add('validator-fails')
    })
    
    return this
  }
}

export default Control