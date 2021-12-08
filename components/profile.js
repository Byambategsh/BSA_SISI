// <profile></profile>
class Profile extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    this.shadowProfile = this.attachShadow({
        mode:"open"
    });
  }
  connectedCallback() {
    this.shadowProfile.innerHTML = `
         <style>
            .daysNum{
              width: 100%;
              height: auto;
              display: inline-grid;
              grid-template-columns: repeat(7, 1fr);
              grid-column-gap: 2vw;
              border-radius: 2vw; 
            }
            
            label{
                margin: auto;
                color: #070659;
                text-shadow: 2px 2px 4px #D0CDCD;
            }
            h5{
                  text-align: center;
                  font-family: 'Nunito', sans-serif;
                  font-size: 0.9em;
                  color: black;
                  text-shadow: 2px 2px 4px #D0CDCD;
                  margin: auto;
            }            
            .week2 > label{
              color="#898080";
            }
          </style>

          <section class="calendar">
              <h5><b>< 15 > </b>| 2021.11 сар </h5>
              <hr style="height:2px;border-width:0;color:blue;background-color:#2E15C5">
              <days-tab></days-tab> 
              <div class="week1 daysNum">
                  <label for="mon" class="mon">6</label>

                  <label for="tue" class="tue" style="color: blue">7</label>

                  <label for="wed" class="wed">8</label>

                  <label for="thu"class="thu">9</label>

                  <label for="fri" class="fri">10</label>

                  <label for="sat" class="sat">11</label>

                  <label for="sun" class="sun">12</label>
              </div>
              <div class="week2 daysNum">
                  <label class="mon">13</label>

                  <label for="tue" class="tue">14</label>

                  <label for="wed" class="wed">16</label>

                  <label for="thu"class="thu">16</label>

                  <label for="fri" class="fri">17</label>

                  <label for="sat" class="sat">18</label>

                  <label for="sun" class="sun">19</label>
              </div>
            </section>
    `;
  }
  disconnectedCallback() {
    
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    
  }
}

window.customElements.define('plan-calendar', Profile);