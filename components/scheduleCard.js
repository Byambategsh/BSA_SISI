// <scheduleCard></scheduleCard>
class ScheduleCard extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    this.shadowCard = this.attachShadow({
      mode:"open"
    });
    this.courseId = this.getAttribute("courseId") || " ";
    this.address = this.getAttribute("lecture");
  }
  connectedCallback() {
    fetch("http://127.0.0.1:5500/data/courses.json").then(response => response.json())
        .then(data => {
            // this.courseId = data.courseId;
            // this.address = data.lecture;

            // console.log(this.courseId);
            // console.log(this.address);

            const result = data.filter(subj => subj.courseId == this.courseId);

          if(result.length == 1){
            this.shadowCard.innerHTML = `
              <style>
              :host{
                ${this.getStyle (this.getAttribute("start"), this.getAttribute("duration"))}
              }
                .perSchedule{
                    // margin: 1vw;
                    // padding: 1vw;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border-radius: 3vw;
                    opacity: 0.8;
                }
                .perSchedule:hover{
                  opacity: 1;
                }
                p{
                  text-align: center;
                  font-family: 'M PLUS Rounded 1c', sans-serif;
                  font-size: 0.8em;
                  color: #fff;
                }
                .lab{
                  background-color: #8bbf43;
                }
                .sem{
                  background-color: #f0a000;
                }
                .lec{
                  background-color: #e67e96;
                }
                .icon{
                  width: 4.5vw; 
                  height: auto; 
                  transform: translateY(3px);
                  filter: invert(100%) sepia(21%) saturate(85%) hue-rotate(205deg) brightness(109%) contrast(90%);
                }
              </style>

              <article class="perSchedule ${this.getAttribute("type")}">
                    <p>
                      <b> ${this.courseId}</b> | 
                      <img src="Iconography/pin-outline.svg" alt="" class="icon">
                      </span>${this.getAttribute("room")}
                    </p>
              </article>

            `;
          }
        });
  }
  getStyle(start, duration){

    return `grid-row: ${start}/${1*start + 1*duration}; grid-column: 2/4;`
  }
  disconnectedCallback() {

  }
  attributeChangedCallback(attrName, oldVal, newVal) {

  }
}

window.customElements.define('schedule-card', ScheduleCard);