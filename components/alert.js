
class Alert extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    this.shadowWarning = this.attachShadow({
        mode:"open"
    });
  }
  connectedCallback() {

    this.shadowWarning.innerHTML = `

        <style>
            .warningIcon{
                border-radius: 50%;
                background-color: green;
            }
        </style>
        
        <p>${this.time}</p>
        <div class="warningIcon">${this.pColor}</div>
        <p>${this.work}</p>
    `;
    
  }
  disconnectedCallback() {
    
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    
  }
}

window.customElements.define('alert-msg', Alert);