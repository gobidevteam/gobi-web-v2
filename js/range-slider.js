var slider = document.getElementById("rangeInput");
var output = document.getElementById("budget");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

