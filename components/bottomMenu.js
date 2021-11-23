// <bottomMenu></bottomMenu>

class BottomMenu extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    this.shadowMenu = this.attachShadow({
        mode:'open'
    });
  }
  connectedCallback() {
    this.shadowMenu.innerHTML = `
      

      // <article class="mainMenu">
      //       <a href="index.html" class="menuLink activeMenu">
      //          <i class="fa fa-home"></i>
      //       </a>
      //       <i class="fa fa-star"></i>
      //       <i class="fa fa-file"></i>
      //       <i class="fa fa-book"></i>
      //       <i class="fa fa-info"></i>
      //    </article>
      <script src="https://kit.fontawesome.com/a80905107e.js" crossorigin="anonymous"></script>
    `;
  }
  disconnectedCallback() {
    
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    
  }
}

window.customElements.define('bottom-menu', BottomMenu);