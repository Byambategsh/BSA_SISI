// <scheduleCard></scheduleCard>
class ScheduleCard extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    this.shadowCard = this.attachShadow({
      mode:"open"
  });
}
  }
  connectedCallback() {
    this.shadowCard.innerHTML = `
        <style>
        </style>
    `;
  }
  disconnectedCallback() {
    
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    
  }
}

window.customElements.define('scheduleCard', ScheduleCard);