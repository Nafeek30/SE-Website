import ChartLoader from "./ChartLoader.js";
import RealChartLoader from "./RealChartLoader.js";

export default class ProxyChartLoader extends ChartLoader
{

  loadChart() {
    // instance of real chart
    const realChart = new RealChartLoader();
    var realChartElmt = document.getElementById('realChart');
    realChartElmt.classList.add("d-none"); /* makes it invisible */

    // display loading empty thing `#proxyChart`
    var proxyChart = document.getElementById('proxyChart');
    proxyChart.classList.remove("d-none"); /* makes it visible */

    realChart.loadChart();
  }

  loadRealChart(dataArray) {
    // instance of real chart
    const realChart = new RealChartLoader();
    realChart.loadRealChart(dataArray);
  }
}
