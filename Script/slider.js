/* Updates the value of the slider  */

var slideId = document.getElementById("rateRange");
var slider = document.getElementById("numberSlider");
slider.innerHTML = slideId.value;

slideId.oninput = function() {
    slider.innerHTML = this.value;
}

slideId1 = document.getElementById("rateRange1");
slider1 = document.getElementById("numberSlider1");
slider1.innerHTML = slideId.value;

slideId1.oninput = function() {
    slider1.innerHTML = this.value;
}