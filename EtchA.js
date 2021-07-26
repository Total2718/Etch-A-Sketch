

//div container in which to place the etch a sketch grid tiles
const gridContainer = document.createElement('div');
gridContainer.classList.add('gridContainer');
const body = document.querySelector('#bod');

//adds the grid container to the body
body.appendChild(gridContainer);

const header = document.querySelector('header');

const title = document.createElement('div');
title.innerHTML = "ETCH-A-SKETCH";
title.style.textAlign = 'center';

const squareDivs = document.getElementsByClassName('squareDiv'); 


header.appendChild(title);

let userGridResponse;
//function to prompt the user for how large they'd like the grid to be
function userPrompt(){
    let n;
    while(n != 1){
        userGridResponse = prompt("Grid Side Length (1-10):");
        if(userGridResponse >= 1 && userGridResponse <= 10){
            n = 1;
        }
        else{
            alert('You must enter a number no greater than 10 and no less than 1');
        }
    }
    return 
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
    let height = 100 * (1 / gridLength);
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = `repeat(${gridLength}, 25vh)`;
    gridContainer.style.backgroundColor = 'blue';
    gridContainer.style.gridRowGap = '5px';
    gridContainer.style.gridColumnGap = '50px';
    
    for(let n = 0; n < squareDivs.length; n++){
        squareDivs[n].style.display = 'inline';
        squareDivs[n].style.height = `${height}vh`;
        squareDivs[n].style.width = `${height}vh`;
        squareDivs[n].style.color = 'red';
        squareDivs[n].style.alignCContent = 'center';
       
        
    }



};
userPrompt();
gridCreator(userGridResponse);


