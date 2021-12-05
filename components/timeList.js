// <timeList></timeList>
class TimeList extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    this.shadowTab = this.attachShadow({
        mode : 'open'
    });
  }
  
  connectedCallback() {
    this.shadowTab.innerHTML = `
    <style>
        table, th, td {
              border-top: 1px dotted #E7E7F6;
              font-size: 0.9em;
              height: 3vh;
              margin-left: 2vw;
          }
          
          .middle-start{
              float: right;
          }
          table{
            width: 22vw;
          }
    </style>
    
    <table>
        <!-- <tr>
          <th class="col1">Time</th>
          <th class="col2">Days</th
        </tr> -->
        <tr class="start">
          <td><b>7:40</b></td>
          <!-- <td><schedule-card></schedule-card></td> -->
        </tr>
        <tr class="middle-start">
            <td>8:25</td>
            
        </tr>
        <tr class="start">
          <td><b>9:20</td>
          <!-- <td></td> -->
        </tr>
        <tr class="middle-start">
            <td>10:05</td>                   
        </tr>
        <tr class="start">
            <td><b>11:00</td>
            <!-- <td></td> -->
        </tr>
        <tr class="middle-start">
            <td>11:45</td>                  
        </tr>
        <tr class="start">
            <td><b>12:40</td>                   
        </tr>
        <tr class="middle-start">
            <td>13:25</td>
        </tr>
        <tr class="start">
            <td><b>14:20</td>                    
        </tr>
        <tr class="middle-start">
            <td>15:05</td>                  
        </tr>
        <tr class="start">
            <td><b>16:00</td>                   
        </tr>
        <tr class="middle-start">
            <td>16:45</td>                  
        </tr>
        <tr class="start">
            <td>1<b>7:40</td>                   
        </tr>
        <tr class="middle-start">
            <td>18:25</td>                    
        </tr>
        <tr>
            <td><b>19:20</td>   
        </tr>
        <tr class="middle-start">
            <td>20:05</td>                    
        </tr>
    </table>

    `;
  }
  disconnectedCallback() {
    
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    
  }
}

window.customElements.define('time-list', TimeList);