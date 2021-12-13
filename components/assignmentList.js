// <daysTab></daysTab>
//import './button-like.js';
class AssignmentList extends HTMLElement {
  constructor() {
    super(); 
    this.shadowTab = this.attachShadow({
        mode : 'open'
    });

    this.courses = [];

    this.courseId = this.getAttribute("courseId");
    
    this.dugaar = this.getAttribute("assignment.dugaar");
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

      this.courses = data;

      this.shadowTab.innerHTML = `

       
            <div class="tab-contents">

              ${this.generateAssignmentList()}
               
            </div>
    `;
            });
  }
  disconnectedCallback() {
    
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    
  }
  // Assignment list of each course
   
generateAssignmentList() {

        console.log(`courses=${this.courses}`);

        let assignmentCards = "";
        this.courses.forEach(course => {
          console.log(course.courseId);
         
            // console.log(`%%%%%%%%%%%% c=${JSON.stringify(course)}`);

            course.courseid.forEach(a=> {   
              `<assignment-card courseId = ${course.courseId}></assignment-card>`        
            //   console.log(`%%%%%%%%%%%% c=${JSON.stringify(course.assignment)}`);
            //     // if (this.course.courseId == courseId) {
            //          `<article class="card">
            //             <h4 class="subjName txt">${course.assignment[0].dugaar}. ${course.assignment[0].aName}<a href="">...</a></h4>   
            //             <p class="subjPoint txt"><b>${course.assignment[0].getPoint} / ${course.assignment[0].sumPoint}</b></p>
            //             <p class = "initDate txt"> ${course.assignment[0].startDate} </p> 
            //             <p class = "dueDate txt"> ${course.assignment[0].dueDate} </p>
            //           </article>
            //          `
            //         //  
            //     // }
            })
        })
        // console.log(assignmentCards);
        return assignmentCards;        
    }
}

window.customElements.define('assignment-list', AssignmentList);