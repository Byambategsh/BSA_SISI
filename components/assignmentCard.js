
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
                width: 100%;
                height: 150px;
                border: 1px solid gray;
                border-radius: 16px;
                display: inline-block;
                background-color: #fff;
                // padding: 2vw;
              }
              .lt{
                  float: left;
              }
              p{
                  text-align: center;
              }
              /* .clr{
                  clear: both;
              } */
              .rt{
                  float: right;  
              }
            </style>
            <article class="card">
              <h4 class="">${result[0].dugaar}. ${result[0].aName}<a href="">...</a></h4>
                
              <p class=""><b>${result[0].getPoint} / ${result[0].sumPoint}</b></p>
              <!-- <div class="cl"></div> -->
              <p class = "lt"> ${result[0].startDate} </p> 
              <p class = "rt"> ${result[0].dueDate} </p>
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