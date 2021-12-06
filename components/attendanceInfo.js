// <attendanceInfo></attendanceInfo>
class AttendanceInfo extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    // this.shadowAttendance = this.attachShadow({
    //     mode:"open"
    // });
  }
  connectedCallback() {
    this.innerHTML = `
    <style>
        .attendance{
            width: 100%;
            text-align: center;
            border: 1px dotted #c9c9db;    
        }
        .attendance td{
            width: 25%;
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
            //     <h4 class="sem">Семинар</h4>

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
                <a href="https://icons8.com/icon/104/star"></a>
              <th colspan="2">Семинар</th> 
            </tr>

            <tr>
              <td>Lec1</td>
              <td><i class="fas fa-check"></i></td>
              <td>Sem1</td>
              <td><i class="fas fa-times"></i></td>
            </tr>

            <tr>
              <td>Lec2</td>
              <td><i class="far fa-circle"></i></td>
              <td>Sem2</td>
              <td><i>i</i></td>
            </tr>
          </table>
    `;
}
  disconnectedCallback() {
    
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    
  }
}

window.customElements.define('attendance-info', AttendanceInfo);

//ctrl+shift+P