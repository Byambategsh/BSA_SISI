// <scheduleCard></scheduleCard>
class ScheduleCard extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    this.shadowCard = this.attachShadow({
      mode:"open"
    });

  }
  connectedCallback() {
    fetch("http://127.0.0.1:5500/data/hall.json").then(response => response.json())
        .then(data => {
            this.courseId = data.courseId;
            this.address = data.lecture;

          this.shadowCard.innerHTML = `
            <style>
              .perSchedule{
                  margin: 1vw;
                  padding: 1vw;
                  // border: 1px solid gray;
                  border-radius: 3vw;
                  height: 5vh;
                  background-color: #ffe6f2;
                  backdrop-filter: blur(12px);
                  -webkit-backdrop-filter: blur(12px);
              }
              .perSchedule:hover{
                background-color: #ff99ca;
              }
              p{
                text-align: center;
                font-family: 'M PLUS Rounded 1c', sans-serif;
                font-size: 0.8em;
              }
            </style>

            <article class="perSchedule">
                  <p><b> ${this.courseId}</b> | <span class="lnr lnr-map-marker"></span>${this.address}</p>
                  
            </article>
        `;
      });
  }
  disconnectedCallback() {
    
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    
  }
}

window.customElements.define('schedule-card', ScheduleCard);