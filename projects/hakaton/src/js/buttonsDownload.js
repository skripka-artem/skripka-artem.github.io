let buttonsDownload = document.getElementsByClassName('butDown')[0]

//console.log(buttonsDownload)



function Convert() {

  let can = document.getElementById('chartJSContainer');

  let quality = 1;
  let myImage = {
    data: can.toDataURL('image/jpeg', quality),
    height: can.height,
    width: can.width
  };
  createPDF(myImage);
}

function createPDF(image) {
  let w = ConvertPxToMM(image.width);
  let h = ConvertPxToMM(image.height);
  let orientation = w > h ? 'l' : 'p';

  let docPDF = new jsPDF(orientation, 'mm', [w, h]);
  docPDF.addImage(image.data, 'JPEG', 0, 0);

  docPDF.output('save', 'canvas.pdf');
}

function ConvertPxToMM(pixels) {
  return Math.floor(pixels * 0.264583);
}



buttonsDownload.addEventListener("click", Convert)



