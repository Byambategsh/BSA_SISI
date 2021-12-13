// <daysTab></daysTab>
//import './button-like.js';
class CoursesDetail extends HTMLElement {
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

        this.courses.forEach(subject => {
          console.log(`subject=${subject.courseId}`);
          `<course-info courseId =  ${subject.courseId}></course-info>`            
        }); 

        this.shadowTab.innerHTML = `
                ${this.generateCourseInfo()}
        `;
        });
    }
    disconnectedCallback() {
      
    }
    attributeChangedCallback(attrName, oldVal, newVal){

    }

    generateCourseInfo() {
        for (let i = 1; i <= this.courses.length; i++){
          if(this.courses[i].courseId == " "){
            <course-info courseId = "ICSI304"></course-info>
          }
        }
        this.courses.forEach(subject => {
          console.log(`subject=${subject.courseId}`);
          `<course-info courseId =  ${subject.courseId}></course-info>`            
        });
    }
    generateCoursesList() {
    
      let retValue="";
      // for (let i = 1; i <= this.courses.length; i++)
      this.courses.forEach(subject => {
        console.log(`subject=${subject.courseId}`);
        `<course-info courseId =  ${subject.courseId}></course-info>`            
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
  }

  window.customElements.define('course-detail', CoursesList);