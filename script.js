const mainGrid = document.querySelector('.outerBorder');


// Creating X amount of Divs
for (let i = 0; i < 256; i++){
    const boxDiv = document.createElement('div');
    boxDiv.setAttribute('id','boxes');
    mainGrid.appendChild(boxDiv);
    
}