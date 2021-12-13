// <daysTab></daysTab>
//import './button-like.js';
class CoursesList extends HTMLElement {
    constructor() {
      super(); 
      this.shadowTab = this.attachShadow({
          mode : 'open'
      });
  
      this.courses = [];
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
                ${this.generateCoursesList()}   
              </div>
        `;
      });
    }
    disconnectedCallback() {
      
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
      
    }
    
// All course list 
      generateCoursesList() {
          let retValue="";
          // console.log(this.courses.length);
          // for (let i = 1; i <= this.courses.length; i++)
          this.courses.forEach(course => {
            console.log(`subject=${course.courseId}`);
            retValue +=`<sem-subject courseId =  ${course.courseId} ></sem-subject>`              
          });
          {
            
            // retValue += `<input type="radio" value="a1" id="weekday_${i}" name="a" class="tab" style="display: none;">
            //      <article slot="tab-content" class="tab-content">
            //               <time-list ></time-list>
            //               ${this.generateScheduleCards(i)}
            //       </article>`
           }      
          return retValue;
     }
  //    generateScheduleCards(garig) {

  //     // console.log(`GARIG=${garig} courses=${this.courses}`);
  //     let scheduleCards = "";
  //     this.courses.forEach(c => {
  //         // console.log(`%%%%%%%%%%%% c=${JSON.stringify(c)}`);
  //         c.schedule?.forEach(s => {
          
  //                 // console.log(`############## s=${s}`);
  //                 // console.log(`${s.type}`);
  //             if (s.weekday == garig) {
  //                 scheduleCards += `<schedule-card courseId = ${c.courseId} type=${s.type} start=${s.start} duration=${s.duration} room=${s.room}></schedule-card>`
  //             }
  //         })
  //     })
  //     return scheduleCards;
      
  // }
  //     generateCourseDetail(courseId) {
  
  //         console.log(`subj=${courseId} courses=${this.courses}`);
  //         let courseCards = "";
  //         this.courses.forEach(course => {
  //             console.log(`%%%%%%%%%%%% c=${JSON.stringify(course)}`);
  //             courses.assignment.forEach(s => {
              
  //                     console.log(`############## s=${s}`);
  //                     console.log(`${s.type}`);
  //                 if (s.weekday == garig) {
  //                     scheduleCards += `<schedule-card courseId = ${c.courseId} type=${s.type} start=${s.start} duration=${s.duration} room=${s.room}></schedule-card>`
  //                 }
  //             })
  //         })
  //         return scheduleCards;
          
  //     }
  }

  window.customElements.define('courses-list', CoursesList);