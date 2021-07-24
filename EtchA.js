

//div container in which to place the etch a sketch grid tiles
const gridContainer = document.createElement('div');
gridContainer.classList.add('grid_container');
const body = document.querySelector('#bod');

//adds the grid container to the body
body.appendChild(gridContainer);

const header = document.querySelector('header');

const title = document.createElement('div');
title.innerHTML = "ETCH-A-SKETCH";


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
    let gridSquare = gridLength * gridLength;
    for( let n = 0; n < gridSquare; n++){
        let newSquareDiv = document.createElement('div');
        newSquareDiv.classList.add('square-div');
        gridContainer.appendChild(newSquareDiv);

        


    }



};
userPrompt();
gridCreator(userGridResponse);


