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
              border-radius: 4vw;
              box-shadow: 0 -2px 10px 0 rgba(0, 0, 0, 0.2), 0 0px 0px 0 rgba(0, 0, 0, 0.19);
              z-index: 1;
            }

            i{
              margin: auto;
            }

            .icon{
              filter: invert(6%) sepia(64%) saturate(3750%) hue-rotate(235deg) brightness(87%) contrast(118%);
              width: 6vw;
              height: 6vw;
              opacity: 0.7;
            }
            
            .icon:hover{
              transform: scale(1.2);   
              opacity: 1;
              filter: invert(11%) sepia(89%) saturate(6630%) hue-rotate(246deg) brightness(72%) contrast(141%);
            }

            i:hover::after{
              transform: scaleY(1.1);
              content: " ";
              display: block;
              width: 1vw;
              height: 1vw;
              border-radius: 50%;
              background-color:#5f0ef7;
              background-position: center; 
              margin: auto;  
            }
            // active menu
            i:hover::after:active{
              transform: scale(1.1);
              filter: invert(6%) sepia(64%) saturate(3750%) hue-rotate(235deg) brightness(87%) contrast(118%);
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
               
         <div class="mainMenu">
            <i class="home" class="menu1">
              <a href="index.html">
                <img src="Iconography/home.png" alt="" class="icon">
              </a>
            </i>
            <i class="menu2">
              <a href="#">
                <img src="Iconography/star.png" alt="" class="icon">
              </a>
            </i>
            <i class="menu3">
              <a href="#">
                <img src="Iconography/program.svg" alt="" class="icon">
              </a>
            </i>
            <i class="menu4">
              <a href="#" >
                <img src="Iconography/File.svg" alt="" class="icon">
              </a>
            </i>
            <i class="help" class="menu5">
              <a href="#">
                <img src="Iconography/moreHorLine.png" alt="" class="icon">
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