let star = document.getElementById("star");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river5 = document.getElementById("river5");
let boat = document.getElementById("boat");
let night = document.querySelector(".night");

window.onscroll = function () {
  let value = scrollY;
  star.style.left = value + "px";
  moon.style.top = value * 3.5 + "px";
  mountains3.style.top = value * 1.8 + "px";
  mountains4.style.top = value * 1.5 + "px";
  river5.style.top = value + "px";
  boat.style.top = value + "px";
  boat.style.left = value * 2.5 + "px";
  night.style.fontSize = value + "px";
  if (scrollY >= 67) {
    night.style.fontSize = 67 + "px";
    night.style.position = "fixed";
    if (scrollY >= 127) {
      night.style.display = "none";
    } else {
      night.style.display = "block";
    }
    if (scrollY >= 110) {
      document.querySelector(".main").style.background =
        "linear-gradient(#85c5e0, #05ccff)";
    } else {
      document.querySelector(".main").style.background =
        "linear-gradient(#4a0047, #014868)";
    }
  }
};
