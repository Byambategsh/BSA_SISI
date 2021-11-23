//import html from "./utils.js";

class SubjectSchedule extends HTMLElement{
    constructor(){
        super();
        this.shadowTabs = this.attachShadow({
            mode:"open"
        });
        this.shadowTabs.innerHTML = `
        <style>
            ul {
                list-style: none; 
                margin: 0;
                padding: 4vw;          
            }
            li{
                float: left;
            }
            li a{
                display: inline-block;
                text-decoration: none;
                //padding-left: 5vw;
            }
            .huvaariTab{
                padding-left: 6vw;
            }

            .tablist > slot {
				display: flex;
				align-items: flex-end;
			}
			.contents ::slotted([aria-hidden="true"]) {
				display: none;
			}
        </style>
        
        <ul class="tabs">
            <li><a href="#tabpanel1-1" slot=tab> Хичээл </a></li>
            <li class="huvaariTab"><a href="#schedule" slot=tab> Хуваарь </a></li>
        </ul>  
    
     
    <x-tab>
        <a href="#tabpanel1-1" slot="tab">Tab 1-1</a>
        <a href="#tabpanel1-2" slot="tab">Tab 1-2</a>
        <a href="#tabpanel1-3" slot="tab">Tab 1-3</a>
        <div slot="tabpanel" id="tabpanel1-1">
          Contents of tabpanel 1-1 <button type="button">Button</button>
        </div>
        <div slot="tabpanel" id="tabpanel1-2">
          Contents of tabpanel 1-2 <button type="button">Button</button>
        </div>
        <div slot="tabpanel" id="tabpanel1-3">
          Contents of tabpanel 1-3 <button type="button">Button</button>
        </div>
    </x-tab>

            <div id="tablist" class="tablist" role="tablist">
				<slot id="tab-slot" name="tab"></slot>
			</div>
			<div class="tabpanels">
				<slot id="tabpanel-slot" name="tabpanel"></slot>
			</div>
      `;
    }
}
customElements.define('home-tabs', SubjectSchedule);