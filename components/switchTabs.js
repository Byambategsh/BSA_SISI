// <switchTabs></switchTabs>
class SwitchTabs extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    this.shadowMenu = this.attachShadow({
        mode:'open'
    });
    
    }
  
  connectedCallback() {
    this.shadowMenu.innerHTML = `
    <section >

    <ul class="tabs">
        <li><a href="#subject" slot=tabs> Хичээл </a></li>
        <li><a href="#schedule" slot=tabs> Хуваарь </a></li>
    </ul>  
    
    <div>
        <!-- tab group -->
        <a href="#subject" slot="tabs">Hicheel</a>
        <a href="#schedule" slot="tabs">Huvaari</a>
        
        
        <div slot="tabContent" id="subject">
            c
            Contents of tabpanel 1
        </div>
        <div slot="tabContent" id="schedule">
            Contents of tabpanel 2
        </div>
    </div>
    <!-- definition slot | tab group-->
        <div class="tabs" role="tablist">
            <slot id="tab-slot" name="tabs"></slot>
            <p>Yu bh yostoi be</p>
        </div>
        <div class="tabContent">
            <slot id="tabContent-slot" name="tabContent"></slot>
            <p>stupid</p>
        </div>
        <!-- <div id="tablist" class="tablist" role="tablist">
            <slot id="tab-slot" name="tab"></slot>
        </div>
        <div class="tabpanels">
            <slot id="tabpanel-slot" name="tabpanel"></slot>
        </div> -->
        
</section>

`;
  }  
  disconnectedCallback() {
    
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    
  }
}

window.customElements.define('switch-tabs', SwitchTabs);
