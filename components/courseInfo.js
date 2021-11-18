// <courseInfo></courseInfo>
class CourseInfo extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    this.shadow = this.attachShadow({
        mode:"open"
    });
    this.courseId = this.getAttribute("courseId");
  }
  connectedCallback() {
     fetch("http://127.0.0.1:5500/data/courses.json").then(response => response.json())
     .then(data => {
         this.courseId = data.courseId;
         this.courseName = data.courseName; 
         this.credit = data.credit;

         this.shadow.innerHTML=html`
            <article>
            
         `;
     });
  }
  disconnectedCallback() {
    
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    
  }
}

window.customElements.define('course-info', CourseInfo);