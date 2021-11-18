// <bottomMenu></bottomMenu>
class BottomMenu extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    this.shadowMenu = this.attachShadow({
        mode:"open"
    });
  }
  connectedCallback() {
    this.shadowMenu.innerHTML =`
      <style>
        .bMenu{
          width: 100%;

        }
        img : hover{
          pointer: cursor;
          color:blue;
          transform: scale(1.1);
        }
      </style>
      <div class="bMenu">
        // <ul class="bottomMenu">
        //       <li><a href="#" class=""></a>
        //       <img src="https://img.icons8.com/fluency-systems-regular/24/000000/star--v1.png"/>
        //       </li>
        //       <li><a href="#" class="fa fa-facebook"></a></li>
        //       <li><a href="#" class=""></a></li>
        //       <li><a href="#" class=""></a></li>
        //       <li><a href="#" class=""></a></li>
        // </ul>
      
      </div>
      <script src="CSS/js/uikit-icons.min.js"></script>
    `;
  }
  disconnectedCallback() {
    
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    
  }
}

window.customElements.define('bottom-menu', BottomMenu);