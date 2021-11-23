// <profile></profile>
class Profile extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    this.shadowProfile = this.attachShadow({
        mode:"open"
    });
  }
  connectedCallback() {
    this.shadowProfile.innerHTML = `
        <a href="#">
            <img id="profile" src="https://thumbs.dreamstime.com/b/portrait-new-generation-young-business-woman-charming-busine-portrait-new-generation-young-business-woman-charming-124765960.jpg" alt="student profile img">
        </a>
    `;
  }
  disconnectedCallback() {
    
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    
  }
}

window.customElements.define('student-profile', Profile);