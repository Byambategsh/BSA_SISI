// <courseInfo></courseInfo>
//import './frameworks/css/uikit.mn.css';

class CourseInfo extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    // this.shadow = this.attachShadow({
    //     mode:"open"
    // });
    this.courseId = this.getAttribute("courseId");
    this.courseName = this.getAttribute("courseName"); 
    this.credit = this.getAttribute("credit");
  }

  connectedCallback() {
     fetch("http://127.0.0.1:5500/data/courses.json").then(response => response.json())
     .then(data => {
        //  this.courseId = data.courseId;
        //  this.courseName = data.courseName; 
        //  this.credit = data.credit;

        const result = data.filter(subj => 
            subj.courseId == this.courseId);

        if(result.length == 1){
         this.innerHTML=`
         <style>
              .card{
                
                border-radius:0 0 16px 16px;
                background-color: #ffffff;
                padding: 2vw;
                margin-bottom: 1vh; 
                /* display: flex;
                flex-direction: column; */
              }
              
              p{
                  display: inline;
                  margin: 0;
              }
              .pl{
                  float: left;
              }
              .pr{
                
                float: right;
              }  
              .pc{
                  width: 70%;
                  text-align: center;
              }             
              .moreInfo{
                  display: inli
              }
              .subjMenu{
                  margin-left: 5%;
              }
              .pageTitle{
                  text-align: center;
                  margin: auto;
              }
          </style>

          <article class="card">
          <div class="text">
              <p class="pl"><b>${this.courseId}</b></p>
              <p class="pc"> | ${result[0].courseName} </p>
              <p class="pr"> | ${result[0].credit}</p>
          </div>
          <hr>
          <div class = "subjMenu uk-grid">
              <i class="uk-width-1-4">i</i>
              <i class="uk-width-1-4">i</i>
              <i class="uk-width-1-4">i</i>
              <i class="uk-width-1-4">i</i>
          </div>
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

window.customElements.define('course-info', CourseInfo);