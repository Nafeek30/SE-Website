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

// load chart initially
chartLoader.loadChart();

// receive file upload
document.getElementById('input').addEventListener('change', () => {
  let file = event.target.files;
  console.log(file);
  handleFiles(file);
});

function handleFiles(theFiles) {
  let file = theFiles[0];
  console.log(file.name);
  Papa.parse(file, {
    header: true,
    dynamicTyping: true,
    complete: function(results) {

      // extract coordinates
      results.data.forEach(line => {
        let keys = Object.keys(line);
        var timeStamp = line[keys[3]];
        timeStamp = (timeStamp - (timeStamp % 1000)) / 1000; // milliseconds to seconds
        coordinateSets.push(new CoordinateSet(line[keys[0]], line[keys[1]], line[keys[2]], timeStamp));
      });
      activityTable = coordAnalyzer.analyzeData(coordinateSets);

      // remove duplicate times
      var data = activityTable._activities;
      // I chose this method based on https://stackoverflow.com/a/18165553/6598861
      for (let i = data.length; i--;) {
        if (data[i].startTime === data[i].endTime) {
          data.splice(i, 1);
        }
      }

      chartLoader.loadRealChart(data);
    }
  });
}
