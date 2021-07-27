

//div container in which to place the etch a sketch grid tiles
const gridContainer = document.createElement('div');
gridContainer.classList.add('gridContainer');
const body = document.querySelector('#bod');
body.style.width = "100%";
body.style.height = "50%";
body.style.position = "relative";
body.style.backgroundColor = "blue";

//this color is referenced multiple times throughout
let startingColor = "red";


//adds the grid container to the body
body.appendChild(gridContainer);








const title = document.createElement('div');
title.innerHTML = "ETCH-A-SKETCH";
title.style.textAlign = 'center';
title.style.fontSize = "40px";
title.style.color = "white";

//container for the title 
const header = document.querySelector('header');
header.appendChild(title);
header.style.position = "relative";

const squareDivs = document.getElementsByClassName('squareDiv'); 

let userGridResponse;
//function to prompt the user for how large they'd like the grid to be
function userPrompt(){
    let n;
    while(n != 1){
        userGridResponse = prompt("Grid Side Length (1-100):");
        if(userGridResponse >= 1 && userGridResponse <= 100){
            n = 1;
        }
        else{
            alert('You must enter a number no greater than 10 and no less than 1');
        }
    }
    return 
};
function hoverEffect(){
        newSquareDiv.style.backgroundColor = "yellow";

     };
function gridCreator(gridLength){
  
    //this accounts for making the a square divs worth of elements
    //length of 3 would mean 9 total div elements to be created
    let gridSquare = gridLength * gridLength;
    
    for( let n = 0; n < gridSquare; n++){
        let newSquareDiv = document.createElement('div');
        newSquareDiv.classList.add('squareDiv');
        newSquareDiv.innerHTML = "";
        gridContainer.appendChild(newSquareDiv);

        


    }
    let height = 90 * (1 / gridLength);
    gridContainer.style.display = 'grid';
    gridContainer.style.width = "100%";
    gridContainer.style.height = "100%";
    gridContainer.style.gridTemplateColumns = `repeat(${gridLength}, ${height}vh )`;
    gridContainer.style.backgroundColor = 'blue';
    gridContainer.style.gridRowGap = '0px';
    gridContainer.style.justifyContent = "center";
    
     



    

     

    for(let n = 0; n < squareDivs.length; n++){
        squareDivs[n].style.display = 'inline';
        squareDivs[n].style.height = `${height}vh`;
        squareDivs[n].style.width = `${height}vh`;
        squareDivs[n].style.color = startingColor;
        squareDivs[n].style.alignContent = 'center';
        

       
        
    }
    //selects all of the squarediv class for event listeners
    //this one changes the color of the tile when hovering
    const allSquareDivs = [...document.querySelectorAll(".squareDiv")];
  /*  allSquareDivs.forEach((squareDiv) => {
        squareDiv.addEventListener("mouseout", function() {
            //potential statement if click event is active
            if(squareDiv.style.backgroundColor == "green"){
                
            }
          else {squareDiv.style.backgroundColor = startingColor;
        }
        })
      })*/
    //this reverses the change back to the original color 
    allSquareDivs.forEach((squareDiv) => {
        squareDiv.addEventListener("mouseover", function() {
            //potential statement if click event is active
            if(squareDiv.style.backgroundColor == "green"){
                
            }
            else{
                squareDiv.style.backgroundColor = "yellow";
            }
        })
      })
      //potential click event
     /* allSquareDivs.forEach((squareDiv) => {
        squareDiv.addEventListener("click", function() {
            
          squareDiv.style.backgroundColor = "green";
        })
      })*/

    

      


     


      
};




userPrompt();
gridCreator(userGridResponse);



const resetButton = document.createElement('button');
resetButton.type = "button";
resetButton.textContent = "Reset Etch-A-Sketch";
resetButton.style.position = "absolute";
resetButton.style.left = "46.9%";
resetButton.style.textAlign = "center";
resetButton.classList.add('buttonReset');
body.appendChild(resetButton);
resetButton.addEventListener("click", resetB);




 function resetB(){
  let oldSquares = document.getElementsByClassName("squareDiv");

    while(oldSquares.length > 0){
        gridContainer.removeChild(oldSquares[0]);
    }

  userPrompt();
  gridCreator(userGridResponse)
 

};




