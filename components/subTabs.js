// <subTabs></subTabs>
class SubTabs extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    this.shadowSubTabs = this.attachShadow({
        mode : "open"
    });
  }
  connectedCallback() {
    this.shadowSubTabs.innerHTML = `
        <style>
            li{
                display: inline-block;
            }
            li a{
                text-decoration: none;
            }
            ul {
                list-style: none; 
                padding: 3vw;  
                background-color: antiquewhite; 
            }
            ul li:not(:first-child){
                padding-left: 5vw;
            }
        </style>

        <ul class="tabs">
            <li><a href="index.html"> Даалгавар </a></li>
            <li><a href=""> Ирц </a></li>
            <li><a href=""> Оноо </a></li>
        </ul>  
    `;
    }
  disconnectedCallback() {
    
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    
  }
}

window.customElements.define('sub-tabs', SubTabs);