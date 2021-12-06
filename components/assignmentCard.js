
// <assignmentCard></assignmentCard>
class AssignmentCard extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    
    this.shadowAssignment = this.attachShadow({
        mode:"open"
    });

    this.courseId = this.getAttribute("courseId");
    
    this.dugaar = this.getAttribute("dugaar");
    this.name = this.getAttribute("aName");
    this.initDate = this.getAttribute("startDate");
    this.dueDate = this.getAttribute("dueDate");
    this.getPoint = this.getAttribute("getPoint");
    this.point = this.getAttribute("sumPoint");
  }
  connectedCallback() {
    fetch("http://127.0.0.1:5500/data/assignment.json").then(response => response.json())
            .then(data => {
                // this.name = data.aName;
                // this.initDate = data.startDate;
                // this.dueDate = data.dueDate;
                // this.getPoint = data.getPoint;
                // this.point = data.sumPoint;
          // console.log(data[0].dugaar);

          const result = data.filter(subj => 
            subj.dugaar == this.dugaar);

        if(result.length == 1){
        this.shadowAssignment.innerHTML = `
            <style>
              .card{
                display: inline-grid;
                grid-template-columns: repeat(3, 1fr);
                width: 100%;
                height: auto;
                margin-top: 1vh;
                grid-auto-rows: 5vh; 
                grid-column-gap: 1vw;
                grid-row-gap: 1vw;
                border-radius: 16px 16px 0 16px;
                
                // border: 1px solid gray;

                background-color: #ffffff;
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
              }             
              h4{
                margin-left: 3vw;
              }
              p{
                font-size: 0.9em;
                margin: auto;
              }
              .subjName{
                  grid-column: 1/4;
                  grid-row: 1;
                  overflowX: 
                  vertical-align: text-top;
              }
              .subjPoint{
                grid-column: 2;
                grid-row: 2;
                text-align: center;
              }
              .initDate{
                grid-column: 1;
                grid-row: 3;

              }
              .dueDate{
                grid-column: 3;
                grid-row: 3;
                text-align: right;
              }

              // .lt{
              //     float: left;
              // }
              // p{
              //     text-align: center;
              // }
              
              // .rt{
              //     float: right;  
              // }
            </style>
            <article class="card">
              <h4 class="subjName txt">${result[0].dugaar}. ${result[0].aName}<a href="">...</a></h4>
                
              <p class="subjPoint txt"><b>${result[0].getPoint} / ${result[0].sumPoint}</b></p>
              <p class = "initDate txt"> ${result[0].startDate} </p> 
              <p class = "dueDate txt"> ${result[0].dueDate} </p>
            </article> 
          `;
          }
        });
  }
  disconnectedCallback() {
    
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    
  }
}

window.customElements.define('assignment-card', AssignmentCard);