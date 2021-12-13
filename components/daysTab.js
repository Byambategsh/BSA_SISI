// <daysTab></daysTab>
//import './button-like.js';
class DaysTab extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    this.shadowTab = this.attachShadow({
        mode : 'open'
    });

    this.courses = [];
  }
  fetchData(){
    //   console.log("****************** fetching...")
      
  }

  connectedCallback() {
    fetch("http://127.0.0.1:5500/data/courses.json")
          .then(response => response.json())
        .then(data => {

      this.courses = data;

      this.shadowTab.innerHTML = `

        <style>
            .daysMenu{
                width: 100%;
                height: auto;
                display: inline-grid;
                grid-template-columns: repeat(7, 1fr);
                grid-column-gap: 2vw;
                // text-shadow: 2px 1px 10px #000099;
                margin: 1vh 0;
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
                padding: 1vw 2vw;
                border: 1px dotted #333;
                border-radius: 1rem;
                background-color: #F1F2F7;
            }     

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
                grid-row: 11/14;
            }
            .card2{
                grid-column: 2/4;
                grid-row: 3/6;
            }
            .card3{
                grid-column: 2/4;
                grid-row: 5/8;
            }
            .card4{
                grid-column: 2/4;
                grid-row: 9/12;
            }
            .card5{
                grid-column: 2/4;
                grid-row: 4/8;
            }
            .card6{
                grid-column: 2/4;
                grid-row: 7/10;
            }
            .card7{
                grid-column: 2/4;
                grid-row: 5/8;
            }
            .card8{
                grid-column: 2/4;
                grid-row: 1/12;
            }
            
            // Animation for switch tabs 
            @keyframes courseTextClick{
                0% {opacity:0;}
                100% {opacity:1;}   
            }
            label:hover{
                transform: scale(1.1);
                color:  #fff;
                background-color: #000099; 
              }
        </style>
        
        <div class="daysMenu">
            <!-- tab group -->
            <label for="weekday_1" class="mon">Да</label>

            <label for="weekday_2" class="tue">Мя</label>

            <label for="weekday_3" class="wed">Лх</label>

            <label for="weekday_4"class="thu">Пү</label>

            <label for="weekday_5" class="fri">Ба</label>

            <label for="weekday_6" class="sat">Бя</label>

            <label for="weekday_7" class="sun">Ня</label>
        </div>  

            <div class="tab-contents">

              ${this.generateWeekdayTabs()}
               
            </div>
       `;
    });
  }
  disconnectedCallback() {
    
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    
  }

generateWeekdayTabs() {
    const today = new Date();
    console.log(today);

    const day = today.getDay();
    console.log(day);
    // if(day == 0)
    //     day = 7;
    let retValue="";

    for (let i = 0; i < 7; i++)
    {

        if(i == day){
            retValue += `<input type="radio" value="a1" id="weekday_${i}" name="a" class="tab" style="display: none;" checked="checked">
            <article slot="tab-content" class="tab-content">
                    <time-list ></time-list>
                    ${this.generateScheduleCards(i)}
            </article>`
        }else{
            retValue += `<input type="radio" value="a1" id="weekday_${i}" name="a" class="tab" style="display: none;">
            <article slot="tab-content" class="tab-content">
                    <time-list ></time-list>
                    ${this.generateScheduleCards(i)}
            </article>`
        } 
    }
             
    return retValue;
}

generateScheduleCards(garig) {

    // console.log(`GARIG=${garig} courses=${this.courses}`);
    let scheduleCards = "";
    this.courses.forEach(c => {
        // console.log(`%%%%%%%%%%%% c=${JSON.stringify(c)}`);
        c.schedule?.forEach(s => {
        
                // console.log(`############## s=${s}`);
                // console.log(`${s.type}`);
            if (s.weekday == garig) {
                scheduleCards += `<schedule-card courseId = ${c.courseId} type=${s.type} start=${s.start} duration=${s.duration} room=${s.room}></schedule-card>`
            }
        })
    })
    return scheduleCards;
    }
}

window.customElements.define('days-tab', DaysTab);