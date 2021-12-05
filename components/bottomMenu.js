// <bottomMenu></bottomMenu>
// import '.frameworks/css/uikit.min.css';
class BottomMenu extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    this.shadowMenu = this.attachShadow({
        mode:'open'
    });
  }
  connectedCallback() {
    this.shadowMenu.innerHTML = `
    
        <style>
            .mainMenu{
              width: 100%;
              height: 56px;
              display: inline-grid;
              grid-template-columns: repeat(5, 1fr);
              
              grid-column-gap: 2vw;
              background-color: white; // #F1F2F7;
              border-radius: 2vw;
            }
            
            i{
              margin: auto;
              color: gray; 
              size: 24px;
            }

            .mainMenu{
              color: gray;
            }
           .mainMenu i:hover{
             transform: scale(1.3);
             color:  #000099;
            }
            
            .mainMenu i:hover::after{
              transform: scaleY(1.1);
              opacity: 1;
              content: " ";
              display: block;
              width: 1vw;
              height: 1vw;
              border-radius: 1vw;
              background-color:#5f0ef7;
              background-position: center; 
              margin-left: 3.5vw; 
              margin-top: -1vh;
            }
            .menu1{
              grid-column: 1;
              grid-row: 1;
            }
            .menu2{
              grid-column: 2;
              grid-row: 1;
            }
            .menu3{
              grid-column: 3;
              grid-row: 1;
            }
            .menu4{
              grid-column: 4;
              grid-row: 1;
            }
            .menu5{
              grid-column: 5;
              grid-row: 1;
            }

            
            //  menu hoorondiin zai 

            // .mainMenu i:not(:first-child){ 
            //     margin-left: 5%;
            // }
              
            // .mainMenu a.active{
            //     transform: scale(1.1);
            //     color:#fff;
            // }

        </style>
        <script src="iconic.min.js"></script>
         <div class="mainMenu">
            <i class="home" class="menu1">
              <a href="index.html">
                <img src="Iconography/home_icon.svg" alt="home icon">
              </a>
            </i>
            <i class="grade" class="menu2">
              <a href="#">
                <img src="Iconography/star_roundedCorner.svg" alt="home icon">
              </a>
            </i>
            <i class="program" class="menu3">
              <a href="#">
              <img class="iconic iconic-lg" src="code.svg">
              </a>
            </i>
            <i class="file">
              <a href="#" class="menu4">
                <img src="Iconography/home.svg" alt="home icon">
              </a>
            </i>
            <i class="help" class="menu5">
              <a href="#">
                <img src="Iconography/home_icon.svg" alt="home icon">
              </a>
            </i>         
         </div>
    `;
  }
  disconnectedCallback() {
    
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    
  }
}

window.customElements.define('bottom-menu', BottomMenu);