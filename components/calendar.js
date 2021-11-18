// <calendar></calendar>
class Calendar extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    
  }
  connectedCallback() {
    
  }
  disconnectedCallback() {
    
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    
  }
}

window.customElements.define('calendar', Calendar);