import ChartLoader from "./ChartLoader.js";

export default class RealChartLoader extends ChartLoader {
  loadChart(data) {
    let elemTotalSec = document.getElementById('totalSeconds');
    elemTotalSec.classList.remove('d-none');

    /* insert logic */
    // convert data to format fit for chart
    let newData = data.map((object, index) => ({
      x: moment.unix(object.startTime).format('h:mm:ss a'),
      y: (object.isMoving ? 1 : 0)
    }));

    console.log(newData);

    var minutes = {
      parser: "HH:mm:ss a", //<- use 'parser'
      unit: 'minute',
      unitStepSize: 1,
      minUnit: 'minute',
      tooltipFormat: 'hh:mm a',
      displayFormats: {
        'minute': 'hh:mm a',
      },
    };

    // display loading empty thing `#proxyChart`
    let elemProxyChart = document.getElementById('proxyChart');
    elemProxyChart.classList.add("d-none");
    let ctx = document.getElementById("realChart");
    ctx.classList.remove('d-none');
    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Activity',
          steppedLine: 'true',
          data: newData,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1
        }]
      },
      options: {
        elements: {
          point: {
            radius: 0
          }
        },
        scales: {
          xAxes: [{
            type: 'time',
            // position: 'bottom',
            time: minutes,
          }],
          yAxes: [{
            type: 'linear',
            position: 'left',
            ticks: {
              max: 1,
              min: 0,
              stepSize: 1
            }
          }]
        },
      }
    });
  }
}
