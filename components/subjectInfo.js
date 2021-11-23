// <subjectInfo></subjectInfo>
class SubjectInfo extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    
    this.shadowSubInfo = this.attachShadow({
        mode:"open"
    });
  }
  connectedCallback() {
    this.shadowSubInfo.innerHTML = `

    `;
  }
  disconnectedCallback() {
    
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    
  }
}

window.customElements.define('subject-info', SubjectInfo);