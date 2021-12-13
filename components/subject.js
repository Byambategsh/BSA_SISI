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
        this.notification = this.getAttribute("notification");
    }
    connectedCallback(){
        fetch("http://127.0.0.1:5500/data/courses.json").then(response => response.json())
            .then(data => {
                // this.courseId = data.courseId;
                // this.courseName = data.courseName;

                // console.log(data[0].courseId);
                
                const result = data.filter(subj => subj.courseId == this.courseId);

            if(result.length == 1){
            this.shadow.innerHTML = `
                <style>
                @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');
                    .subject_card {
                        margin: 1vw;
                        padding: 2vw;
                        height: auto;
                        //border: solid 1px;
                        text-align: left;  
                    }
                    .circle_badge {
                        float: right; 
                        // width: 5vw;
                        // height: 5vw;
                        padding: 0 1.5vw;
                        background-color: #C0392B;
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }     
                   
                    h4{
                        // font-family: 'M PLUS Rounded 1c', sans-serif;
                        font-family: 'Nunito', sans-serif;
                        font-size: 0.9em;
                        margin: 1vh;
                        padding-top:5%;
                        color:  #000033
                        
                    }
                    p{
                        color: white;
                        font-size: 0.8em;
                        margin:auto;
                        text-align: center;
                    }
                    a{
                        text-decoration: none;
                        text-shadow: 3px 3px 10px #bfbfbf;
                    }
                    hr{
                        opacity: 0.4;
                    }
                </style>

                <article class = "subject_card">
                    <hr>
                    <div class="circle_badge"><p>${result[0].notification.length}</p></div>
                    <a href="subjectDetail.html" class="link"><h4><b>${this.courseId}</b> | ${result[0].courseName}</h4></a>
                </article>
            `;
        }
        });
    }
    checkNoti(cnt){
        if(cnt > 0){
            `<article class = "subject_card">
                <hr>
                <div class="circle_badge"><p>${result[0].notification.length}</p></div>
                <a href="subjectDetail.html" class="link"><h4><b>${this.courseId}</b> | ${result[0].courseName}</h4></a>
                </article>`
        }
        else{
        `<article class = "subject_card">
            <hr>
            <div class="circle_badge"><p>${result[0].notification.length}</p></div>
            <a href="subjectDetail.html" class="link"><h4><b>${this.courseId}</b> | ${result[0].courseName}</h4></a>
        </article>`
        }
    }
}
customElements.define('sem-subject', Subject);