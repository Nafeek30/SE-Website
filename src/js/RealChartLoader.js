import ChartLoader from "./ChartLoader.js";

export default class RealChartLoader extends ChartLoader {
  loadChart() {
    setTimeout(this.simulateLoad, 500);
    console.log("This is a real chart");
  }

  simulateLoad() {
    // display loading empty thing `#proxyChart`
    var proxyChart = document.getElementById('proxyChart');
    proxyChart.classList.add("d-none"); /* makes it visible */
    var ctx = document.getElementById("realChart");
    ctx.classList.remove('d-none');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["1:00 AM", "1:01 AM", "1:05 AM", "1:10 AM", "1:11 AM", "1:12 AM"],
        datasets: [{
          label: '# of Votes',
          steppedLine: 'true',
          data: [1, 0, 1, 1, 0, 1],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              max: 1,
              min: 0,
              stepSize: 1
            }
          }]
        }
      }
    });
  }
}
