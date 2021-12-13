// <attendanceInfo></attendanceInfo>
class AttendanceInfo extends HTMLElement {

  constructor() {
    super(); // always call super() first in the ctor.
    // this.shadowAttendance = this.attachShadow({
    //     mode:"open"
    // });
    this.courses = [];

    this.courseId = this.getAttribute("courseId");
    
    this.date = this.getAttribute("date");
    this.val = this.getAttribute("val");
    this.type = this.getAttribute("type");
    this.num = this.getAttribute("num");
  }

  fetchData(){
      console.log("fetching2...");
  }

  connectedCallback() {
    fetch("http://127.0.0.1:5500/data/courses.json")
          .then(response => response.json())
        .then(data => {
    
          const result = data.filter(course => 
              course.courseId == this.courseId);
          console.log(this.courseId);

          if(result.length == 1){
            this.innerHTML = `
            <style>
            @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');
                .attendance{
                    width: 100%;
                    text-align: center;
                    border: 1px dotted #c9c9db;  
                    font-family: 'Nunito', sans-serif;
                    
                    margin-top: 1vh;
                    border-radius: 1rem;
                    background-color: white;
                }
                .attendance td{
                    width: 25%;
                    padding: 1vh;
                    border-left: 1px dotted #E7E7F6;
                    font-size: 0.8em;  
                }
                th{
                  font-size: 0.9em;  
                  border-left: 1px dotted #E7E7F6;
                }
                
                // .attTable{
                //     display: inline-grid;
                //     grid-template-columns: 25% 20% 25% 20%;
                //     grid-auto-rows: minmax(4vh, 6vh);
                //     grid-column-gap: 1vw;
                // }
                // p, h4{
                //     text-align: center;
                // }
                // .lec{
                //     grid-column: 1/3;
                //     grid-row: 1;
                // }
                // .sem{
                //     grid-column: 3/5;
                //     grid-row: 1;
                // }  
                // .l1{
                //     grid-column: 1;
                //     grid-row: 2;
                // }
                // .li1{
                //     grid-column: 2;
                //     grid-row: 2;
                // }
                // .s1{
                //     grid-column: 3;
                //     grid-row: 2;
                // }
                // .si1{
                //     grid-column: 4;
                //     grid-row: 2;
                // }
                // .l1{
                //     grid-column: 1;
                //     grid-row: 2;
                // }




                    // <article class="attTable">
                    //     <h4 class="lec">Лекц</h4>
                    //     <h4 class="sem">Семинар/Лаб</h4>

                    //     <p class="l1">Lec1</p>
                    //     <i class="li1">i</i>
                    //     <p class="s1">Sem1</p>
                    //     <i class="si1">i</i>



                    //     <p class="l"></p>
                    //     <p class="l4"></p>
                    //     <p class="l5"></p>
                    //     <p class="l6"></p>
                    //     <p class="l"></p>
                    //     <p class="l1"></p>
                    //     <p class="l1"></p>

            // </article>
            </style>
            <table class="attendance">
                <tr>
                  <th colspan="2">Лекц</th>
                  <th colspan="2">Семинар / Лаб</th> 
                </tr>
                ${this.generateAttendanceTable(result)} 
            </table>
           `;
          }
      });
  }
  generateAttendanceTable(course) {

    let retValue="";
    
    for (let i = 1; i <= course[0].attendance.length/2; i++)
    {
        retValue += 
        `
          <tr class="lec">
            <td>${course[0].attendance[i].date}</td>
            <td>${this.renderIcon(course[0].attendance[i].val)}</td>

            <td>${course[0].attendance[i].date}</td>
            <td>${this.renderIcon(course[0].attendance[i].val)}</td>
          </tr>
        `
      }      
    return retValue;
  }

  generateAttendanceTableType(course) {

    let lecVal="", semVal="", retVal="";
    
    for (let i = 1; i <= course[0].attendance.length; i++)
    {
      console.log((course[0].attendance[i].type).localeCompare("lec"));
      if((course[0].attendance[i].type).localeCompare("lec")==0){
        lecVal += 
        `
            <td>${course[0].attendance[i].date}</td>
            <td>${course[0].attendance[i].val}</td> 
        `
       }
      else{
        semVal += 
        `
            <td>${course[0].attendance[i].date}</td>
            <td>${course[0].attendance[i].val}</td>
        `
      }    
    }    
   
    retVal = lecVal+semVal;
    // `
    // <tr>
    //   ${lecVal}
    //   ${semVal}
    // </tr>
    // `
    return retVal;
  }

  renderIcon(val){
    let icon="";
    if(val.localeCompare("и") == 0){
      icon = `<i class="fas fa-check" style="color: #2eb82e;"></i>`
    }
    else if(val.localeCompare("т") == 0){
      icon = `<i class="fas fa-times" style="color: #e60000;"></i>`
    }
    else{
      icon = `<i class="far fa-circle" style="color: #000099;"></i>`
    }
    return icon;
  }

  disconnectedCallback() {
    
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    
  }
}

window.customElements.define('attendance-info', AttendanceInfo);

//ctrl+shift+P