import ChartLoader from "./ChartLoader.js";
import RealChartLoader from "./RealChartLoader.js";

export default class ProxyChartLoader extends ChartLoader
{

  loadChart(dataArray) {
    // instance of real chart
    const realChart = new RealChartLoader();
    let elemRealChart = document.getElementById('realChart');
    let elemBtnUpload = document.getElementById('btnUpload');
    elemRealChart.classList.add("d-none"); /* makes it invisible */
    elemBtnUpload.classList = "loading";

    setTimeout(realChart.loadChart, 1500, dataArray);
  }
}
