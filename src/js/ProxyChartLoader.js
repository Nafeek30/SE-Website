import ChartLoader from "./ChartLoader.js";
import RealChartLoader from "./RealChartLoader.js";

export default class ProxyChartLoader extends ChartLoader
{
  loadChart() {
    // instance of real chart
    const realChart = new RealChartLoader();

    // display loading empty thing `#proxyChart`
    var proxyChart = document.getElementById('proxyChart');
    proxyChart.classList.remove("d-none"); /* makes it visible */

    realChart.loadChart();
  }
}
