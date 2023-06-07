
// Increments counter on every click
var clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};

// Change the colour whenever clicked
var count = 1;
function setColor(btn, color) {
  var property = document.getElementById(custom - btn);
  if (count == 0) {
    property.style.backgroundColor = "#FFFFFF"
    count = 1;
  }
  else {
    property.style.backgroundColor = "#7FFF00"
    count = 0;
  }
}

function randomize() {
  document.getElementById('custom-btn').style.backgroundColor = randomColors();
}


// random colors - taken from here:
// http://www.paulirish.com/2009/random-hex-color-code-snippets/

function randomColors() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}