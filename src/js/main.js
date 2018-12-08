import CoordinateSet from "./CoordinateSet.js";
import Activity from "./Activity.js";
import CsvDataBase from "./CsvDataBase.js";
import FireStorageImplementor from "./FireStorageImplementor.js";
//import CoordinateSetDataBase from "./CoordinateSetDataBase.js";
//import FirebaseImplementor from "./FirebaseImplementor.js";
import JerkAnalyzerImplementor from "./JerkAnalyzerImplementor.js";
import CoordinateSetAnalyzer from "./CoordinateSetAnalyzer.js";
import ProxyChartLoader from "./ProxyChartLoader.js";

//Database Implementor
//const impl = new FirebaseImplementor();
const impl = new FireStorageImplementor();
//Database Abstraction
//const coordDb = new CoordinateSetDataBase(impl);
const csvDb = new CsvDataBase(impl);
//Analyzer Implementor
const analyzerImpl = new JerkAnalyzerImplementor();
//Analyzer Abstraction
const coordAnalyzer = new CoordinateSetAnalyzer(analyzerImpl);

// Proxy Chart Loader
const chartLoader = new ProxyChartLoader();


//let testData = coordDb.getData();
let coordinateSets = [];
let activityTable = null;

const csvQuery = csvDb.getData();
csvQuery.then(querySnapshot => {
	let objs = [];
	querySnapshot.forEach(doc => {
		objs.push(doc.data());
	});
	if(objs.length > 0)
	{
		//get most recent csv from fire storage
		let mostRecent = objs.reduce((a, b) => a.date > b.date ? a : b);
		//console.log(mostRecent);
		//download csv
		const xhr = new XMLHttpRequest();
		xhr.responseType = "blob";
		xhr.onload = function(event){
			const blob = xhr.response;
			parseFile(blob);
		};
		xhr.open("GET", mostRecent.downloadUrl);
		xhr.send();
	}
});

/*
testData.then(querySnapshot => {
 	querySnapshot.forEach(doc => {
 		let obj = doc.data();
	    let timestamp = (obj.timestamp - (obj.timestamp % 1000)) / 1000;
 		coordinateSets.push(new CoordinateSet(obj.x, obj.y, obj.z, obj.timestamp));
 	});

 	//Analyze the data
 	activityTable = coordAnalyzer.analyzeData(coordinateSets);
 	
	var data = activityTable._activities;
    // I chose this method based on https://stackoverflow.com/a/18165553/6598861
    for (let i = data.length; i--;) {
      if (data[i].startTime === data[i].endTime) {
        data.splice(i, 1);
      }
    }

    let elemActiveSec = document.getElementById('active_seconds');
    let elemInactiveSec = document.getElementById('inactive_seconds');
    let elemTotalSec = document.getElementById('totalSeconds');
    elemActiveSec.innerHTML = `${activityTable._totalActiveDuration} seconds`;
    elemInactiveSec.innerHTML = `${activityTable._totalStationaryDuration} seconds`;

    chartLoader.loadChart(data);

});
*/

// receive file upload
document.getElementById('input').addEventListener('change', () => {
  let file = event.target.files;
  // console.log(file);
  handleFiles(file);
});

function handleFiles(theFiles) 
{
	let file = theFiles[0];
	//upload csv to firestorage
	csvDb.uploadData(file);
	parseFile(file);
}

function parseFile(file)
{
	Papa.parse(file, {
    	header: true,
    	dynamicTyping: true,
    	complete: function(results) {		
      	// extract coordinates
      	results.data.forEach(line => {
        	let keys = Object.keys(line);
        	let timeStamp = line[keys[3]];
        	timeStamp = (timeStamp - (timeStamp % 1000)) / 1000; // milliseconds to seconds
        	coordinateSets.push(new CoordinateSet(line[keys[0]], line[keys[1]], line[keys[2]], timeStamp));
      	});
		
	  	coordinateSets.pop();
	  	//upload new data to firebase
	  	//coordDb.uploadData(coordinateSets);
      	activityTable = coordAnalyzer.analyzeData(coordinateSets);

      	// remove duplicate times
      	//console.log(activityTable);
      	var data = activityTable._activities;
      	// I chose this method based on https://stackoverflow.com/a/18165553/6598861
      	for (let i = data.length; i--;) {
        	if (data[i].startTime === data[i].endTime) {
          		data.splice(i, 1);
        	}
      	}

      	let elemActiveSec = document.getElementById('active_seconds');
      	let elemInactiveSec = document.getElementById('inactive_seconds');
      	let elemTotalSec = document.getElementById('totalSeconds');
      	elemActiveSec.innerHTML = `${activityTable._totalActiveDuration} seconds`;
      	elemInactiveSec.innerHTML = `${activityTable._totalStationaryDuration} seconds`;

      	chartLoader.loadChart(data);

    	}
  	});
}


