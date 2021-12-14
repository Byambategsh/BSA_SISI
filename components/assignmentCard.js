
// <assignmentCard></assignmentCard>
class AssignmentCard extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    
    this.shadowAssignment = this.attachShadow({
        mode:"open"
    });

    this.courses = [];

    this.courseId = this.getAttribute("courseId");
    
    this.dugaar = this.getAttribute("dugaar");
    this.name = this.getAttribute("aName");
    this.initDate = this.getAttribute("startDate");
    this.dueDate = this.getAttribute("dueDate");
    this.getPoint = this.getAttribute("getPoint");
    this.point = this.getAttribute("sumPoint");
  }
  fetchData(){
      console.log("fetching2...")
  }

  connectedCallback() {
    fetch("http://127.0.0.1:5500/data/courses.json")
          .then(response => response.json())
        .then(data => {
    
          const result = data.filter(course => 
              course.courseId == this.courseId);
  
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
                  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 20%), 0 0px 0px 0 rgb(0 0 0 / 19%);
                  background-color: #ffffff;
                  backdrop-filter: blur(12px);
                  -webkit-backdrop-filter: blur(12px);
                }             
                h4{
                  margin-left: 3vw;
                  color: #000033;
                }
                p{
                  font-size: 0.9em;
                  margin: auto;
                  color: #00004d;
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
                .lab{
                  background-color: #8bbf43;
                }
                .sem{
                  background-color: #f0a000;
                  opacity: 0.7;
                }
                .lec{
                  background-color: #e67e96;
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
              
              ${this.generateAssignmentCards(result)}
            `;
            }
        });
  }
//   generateCourseInfo(courseId) {
//     console.log(courseId);  
//     let retValue="";
//       // if(subject.courseId == courseId){
//         result.forEach(assignment => {
//           console.log(`subject=${assignment.dugaar}, ${assignment.type}`);
//           retValue += 
//           ` `           
//         return retValue;
//       });
//     //}
// }
generateAssignmentCards(result) {

  let retValue="";
 
  for (let i = 1; i < result[0].assignment.length; i++)

  {
      retValue += 
      `<article class="card ${result[0].assignment[i].type}">
        <h4 class="subjName txt">${result[0].assignment[i].dugaar}. ${result[0].assignment[i].aName}<a href="">...</a></h4>   
        <p class="subjPoint txt"><b>${result[0].assignment[i].getPoint} / ${result[0].assignment[i].sumPoint}</b></p>
        <p class = "initDate txt"> ${result[0].assignment[i].startDate} </p> 
        <p class = "dueDate txt"> ${result[0].assignment[i].dueDate} </p>
      </article> `
      }      
  return retValue;
}
  disconnectedCallback() {
    
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    
  }
}

window.customElements.define('assignment-card', AssignmentCard);