"use strict";

var elem = document.getElementById("full");
var canvas = document.getElementById("chartJSContainer");
elem.addEventListener("click", function fullScreen() {
  canvas.webkitRequestFullscreen();
});

var buttonsDownload = document.getElementsByClassName('butDown')[0];

//console.log(buttonsDownload)


function Convert() {

  var can = document.getElementById('chartJSContainer');

  var quality = 1;
  var myImage = {
    data: can.toDataURL('image/jpeg', quality),
    height: can.height,
    width: can.width
  };
  createPDF(myImage);
}

function createPDF(image) {
  var w = ConvertPxToMM(image.width);
  var h = ConvertPxToMM(image.height);
  var orientation = w > h ? 'l' : 'p';

  var docPDF = new jsPDF(orientation, 'mm', [w, h]);
  docPDF.addImage(image.data, 'JPEG', 0, 0);

  docPDF.output('save', 'canvas.pdf');
}

function ConvertPxToMM(pixels) {
  return Math.floor(pixels * 0.264583);
}

buttonsDownload.addEventListener("click", Convert);

function getDataFromTable() {
  var tableItem = document.querySelector("tbody");
  var tableRow = tableItem.querySelectorAll("tr");
  var quantity = tableRow.length;
  var tableCol0 = Array.from(tableRow, function (el) {
    return el.querySelectorAll('td')[0].textContent;
  });
  var tableCol1 = Array.from(tableRow, function (el) {
    return el.querySelectorAll('td')[1].textContent;
  });
  return [tableCol0, tableCol1];
}
var barButton = document.getElementById("bar");
var lineButton = document.getElementById("line");
var pieButton = document.getElementById("pie");
var doughnutButton = document.getElementById("doughnut");

function createNewChart() {
  var canvas = document.getElementById('chartJSContainer');
  var ctx = canvas.getContext('2d');
  var firstArray = getDataFromTable()[0];
  var secondArray = getDataFromTable()[1];
  var options = {
    type: 'pie',
    data: {
      labels: firstArray,
      datasets: [{
        data: secondArray,
        fill: false,
        borderColor: false,
        backgroundColor: ["#3f51b5", "#ff5722", "#bcbec0"]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Pie chart'
      }
    }
  };

  for (var i = 0; i < colorArr.length; i++) {
    console.log(colorArr[i]);
    options.data.datasets[0].backgroundColor[i] = colorArr[i];
  }

  var ourChart = new Chart(ctx, options);

  barButton.addEventListener("click", addBar);

  function addBar() {
    ourChart.destroy();
    options.type = 'bar';
    options.options.title.text = 'Bar chart';
    ourChart = new Chart(ctx, options);
    options.data.datasets[0].borderColor = false;
    ourChart.update();
  }

  lineButton.addEventListener("click", addLine);

  function addLine() {
    ourChart.destroy();
    options.type = 'line';
    options.options.title.text = 'Line chart';
    ourChart = new Chart(ctx, options);
    options.data.datasets[0].fill = false;
    options.data.datasets[0].borderColor = "blue";
    ourChart.update();
  }

  pieButton.addEventListener("click", addPie);

  function addPie() {
    ourChart.destroy();
    options.type = 'pie';
    options.options.title.text = 'Pie chart';
    ourChart = new Chart(ctx, options);
    options.data.datasets[0].borderColor = false;
    options.options.cutoutPercentage = 0;
    ourChart.update();
  }

  doughnutButton.addEventListener("click", addDoughnut);

  function addDoughnut() {
    ourChart.destroy();
    options.type = 'doughnut';
    options.options.title.text = 'Doughnut chart';
    ourChart = new Chart(ctx, options);
    options.data.datasets[0].borderColor = false;
    options.options.cutoutPercentage = 50;
    ourChart.update();
  }
}

var draw = document.getElementsByClassName("controls__buttonSave")[0];
draw.addEventListener("click", function drawDiagram() {
  getDataFromTable();
  createNewChart();
  colorArr = [];
});

var colorEl = document.querySelector('.controls__stylish');
//console.log(colorEl);

var picker = new Picker(colorEl);

var colorArr = [];
picker.on_done = function (colour) {
  var hexCode = colour.hex().toString();
  //console.log(hexCode);  
  colorArr.push(hexCode);
  console.log(colorArr);
};

colorEl.onclick = function (e) {
  picker.show();
  //e.preventDefault()
};

var inputLoadExcelFile = document.getElementById('loadExcel');
var parentTable = document.querySelector('.tableWrapper');
var fileName = document.querySelector('#loadExcel');
var newEl = document.createElement('div');

inputLoadExcelFile.addEventListener('change', addToHTML, false);

function addToHTML(e) {
  var reader = new FileReader();
  //console.log(reader);
  reader.readAsArrayBuffer(e.target.files[0]);

  reader.addEventListener("loadend", function () {
    var data = new Uint8Array(reader.result);
    //console.log(data);
    var workbook = XLSX.read(data, { type: 'array' });
    //console.log(workbook);
    process_wb(workbook);
    //console.log(fileName.value);
  });
}

function process_wb(wb) {
  var parentEl = document.querySelector('.tableBlock');
  parentTable.innerHTML = XLSX.utils.sheet_to_html(wb.Sheets[wb.SheetNames[0]], { editable: true }).replace("<table", '<table id="table" border="1"');
  var fileCaption = (fileName.value + '').substring(12);
  //console.log(fileCaption);
  newEl.innerHTML = fileCaption;
  parentEl.appendChild(newEl);
}

var downloadButton = document.querySelector('.controls__upload');
//console.log(downloadButton);
downloadButton.addEventListener("click", downloadExcel);

function downloadExcel(params) {
  var workb = XLSX.utils.table_to_book(document.querySelector('table'), { sheet: "Sheet JS" });
  var wbout = XLSX.write(workb, { booktype: "xlsx", bookSST: true, type: "binary" });
  saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), 'test.xlsx');
}

function s2ab(s) {
  var buf = new ArrayBuffer(s.length);
  var view = new Uint8Array(buf);
  for (var i = 0; i < s.length; i++) {
    view[i] = s.charCodeAt(i) & 0xFF;
  }return buf;
}
/* $("#button-a").click(function () {
    saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), 'test.xlsx');
}); */