const elem = document.getElementById("full");
const canvas = document.getElementById("chartJSContainer");
elem.addEventListener("click", function fullScreen(){
  canvas.webkitRequestFullscreen();
});
