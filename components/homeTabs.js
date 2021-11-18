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
        </style>
        
        <ul class="tabs">
            <li><a href="index.html"> Хичээл </a></li>
            <li class="huvaariTab"><a href="html/schedule.html"> Хуваарь </a></li>
        </ul>  
      `;
    }
}
customElements.define('home-tabs', SubjectSchedule);