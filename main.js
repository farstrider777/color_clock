
jDiv = document.querySelector("div");
var fnark = 0

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

  fnark = onlyTime.filter(function (x){return x !== ":" && x !== " "}).join("");
  console.log(fnark);
  fnark = "#" + fnark;
  jDiv.style.backgroundColor = fnark;
}

trimDate();



setInterval(trimDate, 1000);

//div.style.marginTop = ".25in";
