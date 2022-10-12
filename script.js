


let button = document.getElementById("#buttons");
document.querySelector('#buttons').addEventListener('click', promptMe);

  const mainGrid = document.querySelector(".outerBorder");
  let howManyBoxes = 16;
  let askUserWidth = 400 / howManyBoxes;
  for (let i = 0; i < Math.pow(howManyBoxes, 2); i++) {
  const boxDiv = document.createElement("div");
  boxDiv.setAttribute("id", "boxes");
  
  boxDiv.style.width = askUserWidth - 2 + "px";
  boxDiv.style.height = askUserWidth - 2 + "px";
  mainGrid.appendChild(boxDiv);
  //Hover effect
  boxDiv.addEventListener("mouseover", function () {
  boxDiv.classList.add("specialClass");
  });
  }



  function promptMe() {
  const mainGrid = document.querySelector(".outerBorder");
  // removes all children from node
  while (mainGrid.hasChildNodes()) {
    mainGrid.removeChild(mainGrid.firstChild);
  }
  // adds children to node
  let howManyBoxes = prompt("how many boxes");
  if (howManyBoxes > 100){
    howManyBoxes = prompt("Enter a number below 100");
  }
  else if (howManyBoxes <101){
  let askUserWidth = 400 / howManyBoxes;

  for (let i = 0; i < Math.pow(howManyBoxes, 2); i++) {
  const boxDiv = document.createElement("div");
  boxDiv.setAttribute("id", "boxes");
  
  boxDiv.style.width = askUserWidth - 2 + "px";
  boxDiv.style.height = askUserWidth - 2 + "px";
  mainGrid.appendChild(boxDiv);
  //Hover effect
  boxDiv.addEventListener("mouseover", function () {
  boxDiv.classList.add("specialClass");
  });
};
}
else{
    return;
};
  
};

function removeAllChildNodes(mainGrid) {
    while (mainGrid.boxDiv) {
        mainGrid.removeChild(parent.boxDiv);
    }
}