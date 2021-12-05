// <courseInfo></courseInfo>
// import css from './frameworks/css/uikit.mn.css';

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
                border-radius:7vw 7vw 0 7vw;
                background-color: #ffffff;
                padding: 4vw;
                margin-bottom: 1vh; 
                /* display: flex;
                flex-direction: column; */
            }
            .text{
                display: inline-grid;
                grid-template-columns: auto auto auto;
                grid-auto-rows: minmax(auto, 6vh);
                grid-column-gap: 1vw;
            }
            p{
                text-align: center;
            }
            .pl{
                grid-column: 1;
                grid-row: 1;
            }
            .pr{
                grid-column: 3;
                grid-row: 1;
            }  
            .pc{
                grid-column: 2;
                grid-row: 1;
            }   
            .icons{

            }

            //   p{
            //       display: inline;
            //   }
            //   .pl{
            //       float: left;
            //   }
            //   .pr{
                
            //     float: right;
            //   }  
            //   .pc{
            //       width: 70%;
            //       text-align: center;
            //   }             
            
              .pageTitle{
                text-align: center;
                margin: auto;
              }
              hr{
                border: 1px solid gray; //#E7E7F7
              }
              .svg{
                  color: red;
              }
          </style>

          <article class="card">

            <div class="text">
                <p class="pl"><b>${this.courseId}</b></p>
                <p class="pc"> | ${result[0].courseName} </p>
                <p class="pr"> | ${result[0].credit}</p>
            </div>
          <hr>
            <div class = "subjMenu uk-grid" class="icons">
                <div class="uk-width-1-4">
                    
                </div>
                <div class="uk-width-1-4">
                    <img src="Iconography/schedule.png"  alt="teams icon">
                </div>
                <div class="uk-width-1-4">
                    <img src="Iconography/schedule.svg" alt="teams icon">
                </div>
                <div class="uk-width-1-4">
                    <img src="Iconography/Microsoft_Teams-Logo.wine 1.png" alt="teams icon">
                </div>
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