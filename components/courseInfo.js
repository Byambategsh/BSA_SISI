// <courseInfo></courseInfo>
// import css from './frameworks/css/uikit.mn.css';

class CourseInfo extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    // this.shadow = this.attachShadow({
    //     mode:"open"
    // });
    // let params = new URLSearchParams(document.location.search);
    // this.courseId = params.get("courseId"); // is the string "Jonathan"

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
         @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');
            .card{
                border-radius:0 0 30px 30px;
                background-color: #e6e6ff;
                padding: 2vw 4vw;
                margin-bottom: 1vh; 
            }
            .text{
                width: 100%;
                margin: auto;
                display: inline-grid;
                // grid-template-columns: repeat(3, 1fr);
                // grid-auto-rows: minmax(auto, 6vh);
                grid-column-gap: 1vw;
                align-items: center;
                justify-content: space-between;
            }
            .icons{
                margin: auto;
            }
            p{
                text-align: center;
                font-family: 'Nunito', sans-serif;
                font-size: 1em;
                font-weight: 500;
            }
            .id{
                grid-column: 1;
                grid-row: 1;
            }
            .kr{
                grid-column: 3;
                grid-row: 1;
            }  
            .name{
                grid-column: 2;
                grid-row: 1;
            }   
                  
            .subjIcon{
                // width: 10vw;
                // height: : 10vh;
                border: 1px solid white;
                border-radius: 50%;
                padding: 2vw;
            }
            .subjIcon:hover{
                background-color: white;
            }
              p{
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
                border: 0.5px solid #9999ff;
              }
           
          </style>

          <article class="card">

            <div class="text">
                <p class="id"><b>${this.courseId}</b></p>
                <p class="name"> | ${result[0].courseName} </p>
                <p class="kr"> | ${result[0].credit}</p>
            </div>
          <hr>
            <div class = "subjMenu uk-grid icons">
                <div class="uk-width-1-4">
                    <img src="Iconography/info.svg" alt="course info" class="subjIcon" style="width: 10vw; height: auto;"> 
                </div>
                <div class="uk-width-1-4">
                    <img src="Iconography/subjSchedule.svg"  alt="course all schedule" class="subjIcon">
                </div>
                <div class="uk-width-1-4">
                    <img src="Iconography/poll.svg" alt="санал асуулга" class="subjIcon">
                </div>
                <div class="uk-width-1-4">
                    <img src="Iconography/Microsoft_Teams-Logo.wine 1.png" alt="teams icon" class="subj">
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