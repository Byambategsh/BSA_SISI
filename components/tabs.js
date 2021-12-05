// import './subject';
// import './daysTab';
// import './assignmentCard';
// import './timeList';

class SubjectSchedule extends HTMLElement{
    constructor(){
        super();

        // let template = document.getElementById('home-tabs');
        // let templateContent = template.content;

        // const shadowRoot = this.attachShadow({mode: 'open'})
        //     .appendChild(templateContent.cloneNode(true));

        this.shadowTabs = this.attachShadow({
            mode:"open"
        });
    }
    connectedCallback(){
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
                color: #737373;
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

            .tabs li a:hover{
                transform: scale(1.1);
                color:  #000099;
              }
              
             .tabs li a:hover::after{
                color: #5f0ef7;
             }
        </style>
        
        <ul class="tabs">
            <li><a href="#subject" slot=tab> Хичээл </a></li>
            <li class="huvaariTab"><a href="#schedule" slot=tab> Хуваарь </a></li>
        </ul>  

        <section>
             
        </section>
      `;
    }
}
customElements.define('home-tabs', SubjectSchedule);