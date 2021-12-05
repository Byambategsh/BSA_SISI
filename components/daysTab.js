// <daysTab></daysTab>
//import './button-like.js';
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
            .daysMenu{
                width: 100%;
                height: auto;
                display: inline-grid;
                grid-template-columns: repeat(7, 1fr);
                grid-column-gap: 2vw;
                background-color: #F1F2F7;
                border-radius: 2vw; 
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

            label{
                margin: auto;
                padding: 2vw;
            }

            // .i{
            //     border: 1px solid gray;
            //     border-radius: 50%;
            //     padding: 1vw;
            // }          

            // switch tabs
            .tab{
                display:none;
            }   
            .tab + .tab-content{
                display:none;
                opacity: 0;
            }
            .tab:checked + .tab-content {
                display: inline-grid;
                grid-template-columns: repeat(3, 1fr);
                width: 100%;
                height: auto;
                margin-top: 1vh;
                overflow: scroll;
                grid-auto-rows: 3vh; 
                grid-column-gap: 1vw;
                grid-row-gap: 2vw;

                animation-name: courseTextClick;
                animation-duration: 1s;
                opacity: 1;                
            }
            
            time-list{
                grid-column: 1;
                grid-row: 1/17;
            }
            
            .card1{
                grid-column: 2/4;
                grid-row: 3/6;
            }
            .card2{
                grid-column: 2/4;
                grid-row: 5/8;
            }
            .card3{
                grid-column: 2/4;
                grid-row: 9/12;
            }

            .tab:checked + label{
                color: red;
            }
            // Animation for switch tabs 
            @keyframes courseTextClick{
                0% {opacity:0;}
                100% {opacity:1;}   
            }
            label:hover{
                transform: scale(1.1);
                color:  #000099;
              }
        </style>
        
        <div class="daysMenu">
            <!-- tab group -->
            <label for="mon" class="mon">Да</label>

            <label for="tue" class="tue">Мя</label>

            <label for="wed" class="wed">Лх</label>

            <label for="thu"class="thu">Пү</label>

            <label for="fri" class="fri">Ба</label>

            <label for="sat" class="sat">Бя</label>

            <label for="sun" class="sun">Ня</label>
        </div>  

            <div class="tab-contents">

               <!-- mon tab -->
               <input type="radio" value="a1" id="mon" name="a" class="tab" style="display: none;">
               <article slot="tab-content" id="mon" class="tab-content">
                        <time-list ></time-list>
                        <schedule-card class="card1"></schedule-card>
               </article>
               
               <!-- tue tab -->
               <input type="radio" value="a2" id="tue" name="a" class="tab" style="display: none;">
                <article slot="tab-content" id="tue" class="tab-content"> 
                        <time-list ></time-list>
                        <schedule-card class="card1"></schedule-card>
                        <schedule-card class="card2"></schedule-card>
                        <schedule-card class="card3"></schedule-card> 
                </article>

                <!-- wed tab -->
                <input type="radio" value="a3" id="wed" name="a" class="tab" style="display: none;">
                 <article slot="tab-content" id="wed" class="tab-content"> 
                         <time-list ></time-list>
                         <schedule-card class="card1"></schedule-card>
                         <schedule-card class="card2"></schedule-card>
                         <schedule-card class="card3"></schedule-card> 
                 </article>
 
                 <!-- thu tab -->
                <input type="radio" value="a4" id="thu" name="a" class="tab" style="display: none;">
                 <article slot="tab-content" id="thu" class="tab-content"> 
                         <time-list ></time-list>
                         <schedule-card class="card1"></schedule-card>
                         <schedule-card class="card2"></schedule-card>
                         <schedule-card class="card3"></schedule-card> 
                 </article>
 
                 <!-- fri tab -->
                <input type="radio" value="a5" id="fri" name="a" class="tab" style="display: none;">
                 <article slot="tab-content" id="fri" class="tab-content"> 
                         <time-list ></time-list>
                         <schedule-card class="card1"></schedule-card>
                         <schedule-card class="card2"></schedule-card>
                         <schedule-card class="card3"></schedule-card> 
                 </article>
 
                 <!-- sat tab -->
                <input type="radio" value="a6" id="sat" name="a" class="tab" style="display: none;">
                 <article slot="tab-content" id="sat" class="tab-content"> 
                         <time-list ></time-list>
                         
                 </article>
 
                 <!-- sun tab -->
                <input type="radio" value="a7" id="sun" name="a" class="tab" style="display: none;">
                 <article slot="tab-content" id="sun" class="tab-content"> 
                         <time-list></time-list>
                         <schedule-card class="card1"></schedule-card>
                          
                 </article>
               
            </div>
    `;
  }
  disconnectedCallback() {
    
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    
  }
}

window.customElements.define('days-tab', DaysTab);