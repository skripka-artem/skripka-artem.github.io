function getDataFromTable(){
  const tableItem = document.querySelector("tbody");
  const tableRow = tableItem.querySelectorAll("tr");
  const quantity = tableRow.length;
  const tableCol0 = Array.from(tableRow, el => el.querySelectorAll('td')[0].textContent);
  const tableCol1 = Array.from(tableRow, el => el.querySelectorAll('td')[1].textContent);
  return [tableCol0, tableCol1];
}
const barButton = document.getElementById("bar");
const lineButton = document.getElementById("line");
const pieButton = document.getElementById("pie");
const doughnutButton = document.getElementById("doughnut");


function createNewChart(){
  const canvas = document.getElementById('chartJSContainer');
  const ctx = canvas.getContext('2d');
  const firstArray = (getDataFromTable()[0]);
  const secondArray = (getDataFromTable()[1]);
  let options = {
    type: 'pie',
    data: {
      labels: firstArray,
      datasets: [
        {
          data: secondArray,
          fill: false,
          borderColor: false,
          backgroundColor: [
            "#3f51b5",
            "#ff5722",
            "#bcbec0"
          ]
        }]
    },
    options: {
      title: {
        display: true,
        text: 'Pie chart',
      },
    }
  }

  for (let i = 0; i < colorArr.length; i++) {
    console.log(colorArr[i]);
    options.data.datasets[0].backgroundColor[i] = colorArr[i];
  }

  var ourChart = new Chart(ctx, options);

  barButton.addEventListener("click", addBar);

function addBar (){
  ourChart.destroy();
  options.type = 'bar';
  options.options.title.text = 'Bar chart';
  ourChart = new Chart(ctx, options);
  options.data.datasets[0].borderColor = false; 
  ourChart.update();
}

lineButton.addEventListener("click", addLine);

function addLine(){
  ourChart.destroy();
  options.type = 'line';
  options.options.title.text = 'Line chart';
  ourChart = new Chart(ctx, options);
  options.data.datasets[0].fill = false;
  options.data.datasets[0].borderColor = "blue"; 
  ourChart.update();
}

pieButton.addEventListener("click", addPie);

function addPie(){
  ourChart.destroy();
  options.type = 'pie';
  options.options.title.text = 'Pie chart';
  ourChart = new Chart(ctx, options);
  options.data.datasets[0].borderColor = false; 
  options.options.cutoutPercentage = 0;
  ourChart.update();
}

doughnutButton.addEventListener("click", addDoughnut);

function addDoughnut(){
  ourChart.destroy();
  options.type = 'doughnut';
  options.options.title.text = 'Doughnut chart';
  ourChart = new Chart(ctx, options);
  options.data.datasets[0].borderColor = false; 
  options.options.cutoutPercentage = 50;
  ourChart.update();
}

}

const draw = document.getElementsByClassName("controls__buttonSave")[0];
draw.addEventListener("click",function drawDiagram() {
 getDataFromTable();
 createNewChart();
 colorArr = [];
});




