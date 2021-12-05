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
              background-color: #F1F2F7;
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
            .icon{
              filter: gray;
            }
            .icon:hover{
              filter: invert(42%) sepia(93%) saturate(1352%) hue-rotate(87deg) brightness(119%) contrast(119%);
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
               
         <div class="mainMenu">
            <i class="home" class="menu1">
              <a href="index.html">
                <img src="Iconography/home.png" alt="teams icon" class="icon">
              </a>
            </i>
            <i class="far fa-star" class="menu2">
              <a href="#">
                <img src="Iconography/star_roundedCorner.svg" alt="teams icon" class="icon">
              </a>
            </i>
            <i class="fas fa-tasks" class="menu3">
              <a href="#">
                <img src="Iconography/program.svg" alt="teams icon" class="icon">
              </a>
            </i>
            <i class="far fa-file" class="menu4">
              <a href="#" >
                <img src="Iconography/File.svg" alt=" icon" class="icon">
              </a>
            </i>
            <i class="help" class="menu5">
              <a href="#">
                <img src="Iconography/option.png" alt="teams icon" class="icon">
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