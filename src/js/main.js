import CoordinateSet from "./CoordinateSet.js";
import Activity from "./Activity.js";
import CoordinateSetDataBase from "./CoordinateSetDataBase.js";
import FirebaseImplementor from "./FirebaseImplementor.js";
import JerkAnalyzerImplementor from "./JerkAnalyzerImplementor.js";
import CoordinateSetAnalyzer from "./CoordinateSetAnalyzer.js";
import ProxyChartLoader from "./ProxyChartLoader.js";

//Database Implementor
const impl = new FirebaseImplementor();
//Database Abstraction
const coordDb = new CoordinateSetDataBase(impl);

//Analyzer Implementor
const analyzerImpl = new JerkAnalyzerImplementor();
//Analyzer Abstraction
const coordAnalyzer = new CoordinateSetAnalyzer(analyzerImpl);

// Proxy Chart Loader
const chartLoader = new ProxyChartLoader();

/*
let coordinateSets = [];
for(let i = 0; i < 100; i++)
{
	coordinateSets.push(new CoordinateSet(Math.random() * 1000.0, Math.random() * 1000.0, Math.random() * 1000.0,
		Date.now()));
}
*/

//coordDb.uploadData(coordinateSets);
// let testData = coordDb.getData();
let coordinateSets = [];
let activityTable = null;

// testData.then(querySnapshot => {
// 	querySnapshot.forEach(doc => {
// 		let obj = doc.data();
// 		coordinateSets.push(new CoordinateSet(obj.x, obj.y, obj.z, obj.timestamp));
// 	});
//
// 	//Analyze the data
// 	activityTable = coordAnalyzer.analyzeData(coordinateSets);
// 	console.log(activityTable);
// });

//console.log(coordinateSets);

//Analyze the test data
//let activityTable = coordAnalyzer.analyzeData(coordinateSets);
//console.log(activityTable);

chartLoader.loadChart();

document.getElementById('input').addEventListener('change', () => {
  let file = event.target.files;
  console.log(file);
  handleFiles(file);
});

function populateGraph(myData) {
  // var ctx = document.getElementById("myChart");
  // var myChart = new Chart(ctx, {
  //   type: 'bar',
  //   data: {
  //     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //     datasets: [{
  //       label: '# of Votes',
  //       data: [12, 19, 3, 5, 2, 3],
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.2)',
  //         'rgba(54, 162, 235, 0.2)',
  //         'rgba(255, 206, 86, 0.2)',
  //         'rgba(75, 192, 192, 0.2)',
  //         'rgba(153, 102, 255, 0.2)',
  //         'rgba(255, 159, 64, 0.2)'
  //       ],
  //       borderColor: [
  //         'rgba(255,99,132,1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(255, 206, 86, 1)',
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(153, 102, 255, 1)',
  //         'rgba(255, 159, 64, 1)'
  //       ],
  //       borderWidth: 1
  //     }]
  //   },
  //   options: {
  //     scales: {
  //       yAxes: [{
  //         ticks: {
  //           beginAtZero: true
  //         }
  //       }]
  //     }
  //   }
  // });
  // var x = document.getElementById('moveData');
  // var myArray = myData._activities;
  // myArray.forEach(object => {
  // 	x.innerHTML += `<li>Is Moving: ${object.isMoving}\tStart Time: ${object.startTime}\tEnd Time: ${object.endTime}</li>`;
  // });
}

function handleFiles(theFiles) {
  let file = theFiles[0];
  console.log(file.name);
  Papa.parse(file, {
    header: true,
    dynamicTyping: true,
    complete: function(results) {
      //console.log('parsing complete read', results, 'records.');
      results.data.forEach(line => {
        let keys = Object.keys(line);
        coordinateSets.push(new CoordinateSet(line[keys[0]], line[keys[1]], line[keys[2]], line[keys[3]]));
      });

      //console.log(coordinateSets);
      activityTable = coordAnalyzer.analyzeData(coordinateSets);
      console.log(activityTable);

      // todo: test populating the graph
      populateGraph(activityTable);
    }
  });
}
