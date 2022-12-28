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

export default getValueByType