
jDiv = document.querySelector("div");
var hexCode = 0

function trimDate(){
  spacesInDate = 0;
  onlyTime = [];
  for(var count = 0; count < Date().length; count++){
    if(Date()[count] === " "){
      spacesInDate++;
    }
    if(spacesInDate === 4){
      onlyTime.push(Date()[count]);
    }
  }
  jDiv.innerHTML = onlyTime.join("");

  hexCode = onlyTime.filter(function (x){return x !== ":" && x !== " "}).join("");
  hexCode = "#" + hexCode;
  jDiv.style.backgroundColor = hexCode;
}

trimDate();

setInterval(trimDate, 1000);
