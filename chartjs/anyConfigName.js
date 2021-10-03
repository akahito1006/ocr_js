// in any block on the target HTML, add below
{/*
<div name="thisIncludesTheGraphArea">
  <canvas id="myChart"></canvas>
</div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js"></script>
*/}

// data and config
const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];
const data = {
  labels: labels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
  }]
};
const config = {
  type: 'line',
  data: data,
  options: {
    mode: 'point'
  }
};

// new Chart(canvasElement, config)
var myChart = new Chart(
  document.getElementById('myChart'),
  config
);