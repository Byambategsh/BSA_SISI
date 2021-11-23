//import html from "./utils.js";
//import './button-like.js';

class Subject extends HTMLElement{
    constructor(){
        super();
        
        this.shadow = this.attachShadow({
            mode:"open"
        });

        this.courseId = this.getAttribute("courseId");
        this.courseName = this.getAttribute("courseName");
        console.log(this.courseId);
        this.badge = this.getAttribute("badge");
    }
    connectedCallback(){
        fetch("http://127.0.0.1:5500/data/courses.json").then(response => response.json())
            .then(data => {
                // this.courseId = data.courseId;
                // this.courseName = data.courseName;

                // console.log(data[0].courseId);
                
                const result = data.filter(subj => subj.courseId == this.courseId);


                /*const mySubject = JSON.parse(numSubjects);

                for(let i=0; i < data.length; i++){
                    this.courseId = data[i].courseId;
                    this.courseName = data[i].courseName; 
               }*/
                
                //badge
            if(result.length == 1){
            this.shadow.innerHTML = `
                <style>
                    .subject_card {
                        margin: 1vw;
                        padding: 2vw;
                        
                        height: auto;
                        //border: solid 1px;
                        text-align: left;  
                    }
                    .circle_badge {
                        float: right; 
                        width: max-content;
                        height: max-content;
                        background-color: #C0392B;
                        border-radius: 50%;
                    }     
                   
                    p{
                        //font-family: exo;
                        //font-size: 16px;
                        margin: 1vh;
                        padding-top:5%;
                    }
                    a{
                        text-decoration: none;
                    }
                </style>
                
                <article class = "subject_card">
                    <hr>
                    <div class="circle_badge">${this.badge}</div>
                    <a href="subjectDetail.html" class="link"><p><b>${this.courseId}</b> | ${result[0].courseName}</p></a>
                </article>
            `;
        }
        });
    }
}
customElements.define('sem-subject', Subject);