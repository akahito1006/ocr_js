// in any block on the target HTML, add below
{/*
<div name="thisIncludesTheGraphArea">
  <canvas id="myChart"></canvas>
</div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js"></script>
*/}

Chart.pluginService.register({
  beforeRender: function (chart) {
    // chart tooltipはチャート1つにつき1つまでしか使えない
    chart.pluginTooltips = [];
    // [].forEach(function () {}) 与えられた関数を配列の各要素に対して1度ずつ実行する
    // 下記、i = 0 、 datasets[0]に対して処理を実行する
    chart.config.data.datasets.forEach((dataset, i) => {
      chart.getDatasetMeta(i).data.forEach((sector,j) => {
        chart.pluginTooltips.push(new Chart.Tooltip({
          _chart: chart.chart,
          _chartInstance: chart,
          _data:  chart.data,
          _options: chart.options.tooltips,
          _active: [sector]
        }, chart));
      })
    })
  }
});

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