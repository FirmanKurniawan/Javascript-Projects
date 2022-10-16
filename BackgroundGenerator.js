//Select h3 tag
var h3 = document.querySelector("h3");
//Select input colors
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
//Get background
var body = document.getElementById("gradient");

//Create new function for color pick
function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  h3.textContent = body.style.background + ";";
}

//Pick and set Bkground colors
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

//Match gradient colors
color1.addEventListener("input", setGradient());
color2.addEventListener("input", setGradient());

//Create button for random color pick
var button = document.createElement("button");
button.appendChild(document.createTextNode("Select Random Color"));
body.appendChild(button);

//Random color selector
button.addEventListener("click", getRandomColor);

function randomColor() {
  var color =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";
  return color;
}

function getRandomColor() {
  var rndColor1 = randomColor();
  var rndColor2 = randomColor();
  body.style.background =
    "linear-gradient(to right, " + rndColor1 + ", " + rndColor2 + ")";
  h3.textContent = body.style.background + ";";
}
