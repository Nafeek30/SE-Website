import ChartLoader from "./ChartLoader.js";
import RealChartLoader from "./RealChartLoader.js";

export default class ProxyChartLoader extends ChartLoader
{

  loadChart(dataArray) {
    // instance of real chart
    const realChart = new RealChartLoader();
    let elemProxyChart = document.getElementById('proxyChart');
    elemProxyChart.classList.remove('d-none');
    let elemRealChart = document.getElementById('realChart');
    elemRealChart.classList.add("d-none"); /* makes it invisible */

    setTimeout(realChart.loadChart, 1500, dataArray);
  }
}
