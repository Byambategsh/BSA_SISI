// <assignmentList></assignmentList>
import './assignmentCard';
class AssignmentList extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    this.shadowList = this.attachShadow({
        mode:"open"
    });
  }
  connectedCallback() {
    this.shadowAssignment.innerHTML =`
    <assignment-card dugaar = "1"></assignment-card>
    <assignment-card dugaar = "2"></assignment-card>
    `;
  }
  disconnectedCallback() {
    
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    
  }
}

window.customElements.define('assignment-list', AssignmentList);