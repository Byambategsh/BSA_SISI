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
              border-radius: 4vw 4vw 0 0; 
              z-index: 1;
              box-shadow: 1px 1px 8px #000066, 0 0 8px #e6e6ff;
            }

            i{
              margin: auto;
            }

            .icon{
              filter: invert(6%) sepia(64%) saturate(3750%) hue-rotate(235deg) brightness(87%) contrast(118%);
              width: 6vw;
              height: 6vw;
            }
            
            .icon:hover{
              transform: scale(1.2);   
              filter: invert(9%) sepia(98%) saturate(6266%) hue-rotate(246deg) brightness(54%) contrast(126%);
            }

              i:hover::after
              {
              transform: scaleY(1.2);
              transition: all .4s cubic-bezier(0.075, 0.82, 0.165, 1);
              content: " ";
              display: block;
              width: 1vw;
              height: 1vw;
              border-radius: 50%;
              background-color: #0000b3;
              background-position: center; 
              margin: auto;  
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
            <i class="menu1 active">
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