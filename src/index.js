import "./styles.css";
var seedrandom = require("seedrandom");
//import "birbz.generatorenator";

var seedBox = document.getElementById("seedBox");
seedBox.addEventListener("change", updateSeed);

var genButton = document.getElementById("genButton");
genButton.addEventListener("click", genNext);

var clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", clearCont);

var compButton = document.getElementById("compButton");
compButton.addEventListener("click", compare);

var cont = document.getElementById("appRight");
var comp = document.getElementById("appLeft");

var srng = seedrandom("");

function clearCont() {
  if (cont.innerHTML === "") {
    //If cont is already clear, clear comp
    comp.innerHTML = "";
  } else {
    cont.innerHTML = "";
  }
  srng = seedrandom(seedBox.value); //Reset srng
}

function compare() {
  comp.innerHTML = cont.innerHTML;
  clearCont();
}

function genNext() {
  cont.innerHTML += srng.quick() + "<br>";
}

function updateSeed() {
  srng = seedrandom(seedBox.value);
}
