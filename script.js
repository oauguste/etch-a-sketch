const mainGrid = document.querySelector('.outerBorder');


// Dynamic boxes creation
// user is going to select boxes x boxes
// (Width of the div divided by user selection = 
// height + width of boxes ( minus 2 for the border))
// user boxes selection squared = i


// Creating X amount of Divs
for (let i = 0; i < 256; i++){
    const boxDiv = document.createElement('div');
    boxDiv.setAttribute('id','boxes');
    mainGrid.appendChild(boxDiv);
    //boxDiv.classList.add('classN');
    boxDiv.addEventListener('mouseover', function(){
        boxDiv.classList.add("specialClass");
      });
      
};
    
