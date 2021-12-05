// <daysTab></daysTab>
class DaysTab extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    this.shadowTab = this.attachShadow({
        mode : 'open'
    });
  }
  connectedCallback() {
    this.shadowTab.innerHTML = `
        <style>
            /* Days */
            // .daysList .daysBorder:not(:first-child){ 
            //     margin-left: 6%;
            // }
            // .daysList{
            //     width: 100%;
            //     margin: auto;
            //     display: flex;
            //     flex-direction: row;
            //     justify-content: center;
            //     /* text-align: justify; */
            //     list-style:none;
            // }

            .daysList{
                width: 100%;
                height: auto;
                list-style:none;
                display: inline-grid;
                grid-template-columns: repeat(7, 1fr);
                grid-column-gap: 2vw;
                background-color: #F1F2F7;
                border-radius: 2vw;
            
              }
            li{
                margin: auto;
            }
            .daysBorder{
                border: 1px solid gray;
                border-radius: 50%;
                padding: 1vw;
            }
            a{
                text-decoration: none;
            }
            .mon{
                grid-column: 1;
                grid-row: 1;
              }
            .tue{
                grid-column: 2;
                grid-row: 1;
              }
            .wed{
                grid-column: 3;
                grid-row: 1;
              }
            .thu{
                grid-column: 4;
                grid-row: 1;
              }
            .fri{
                grid-column: 5;
                grid-row: 1;
              }
            .sat{
                grid-column: 6;
                grid-row: 1;
            }
            .sun{
                grid-column: 7;
                grid-row: 1;
            }
  
        </style>
        
        <ul class="daysList">
                <!-- tab group -->
                <li class="daysBorder" class="mon">
                    <a href="#mon" slot="tabs">Да</a>
                </li>
                <li class="daysBorder" class="tue">
                    <a href="#tue" slot="tabs">Мя</a>
                </li>
                <li class="daysBorder" class="wed">
                    <a href="#wed" slot="tabs">Лх</a>
                </li>
                <li class="daysBorder">
                    <a href="#thu" slot="tabs" class="thu">Пү</a>
                </li>
                <li class="daysBorder" class="fri">
                    <a href="#fri" slot="tabs">Ба</a>
                </li>
                <li class="daysBorder" class="sat">
                    <a href="#sat" slot="tabs">Бя</a>
                </li>
                <li class="daysBorder" class="sun">
                    <a href="#sun" slot="tabs">Ня</a>
                </li>
            </ul>  
    `;
  }
  disconnectedCallback() {
    
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    
  }
}

window.customElements.define('days-tab', DaysTab);