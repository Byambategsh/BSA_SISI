// <test></test>
class Test extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    this.shadowTabs = this.attachShadow({
        mode:"open"
    });
    
  }
  connectedCallback() {
    this.shadowTabs.innerHTML = `
        <style>
            howto-tab {
            border: 1px solid black;
            padding: 20px;
            }
            howto-panel {
            padding: 20px;
            background-color: lightgray;
            }
            howto-tab[selected] {
            background-color: bisque;
            }
            howto-tabs:not(:defined), howto-tab:not(:defined), howto-panel:not(:defined) {
                display: block;
            }
        </style>
        
        <howto-tabs>
          <howto-tab role="heading" slot="tab">Tab 1</howto-tab>
          <howto-panel role="region" slot="panel">Content 1</howto-panel>
          <howto-tab role="heading" slot="tab">Tab 2</howto-tab>
          <howto-panel role="region" slot="panel">Content 2</howto-panel>
          <howto-tab role="heading" slot="tab">Tab 3</howto-tab>
          <howto-panel role="region" slot="panel">Content 3</howto-panel>
        </howto-tabs>
        `;
  }
  disconnectedCallback() {
    
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    
  }
}

window.customElements.define('slot-test', Test);


