import CoordinateSet from "./CoordinateSet.js";
import Activity from "./Activity.js";
import CoordinateSetDataBase from "./CoordinateSetDataBase.js";
import FirebaseImplementor from "./FirebaseImplementor.js";
import JerkAnalyzerImplementor from "./JerkAnalyzerImplementor.js";
import CoordinateSetAnalyzer from "./CoordinateSetAnalyzer.js";

//Database Implementor
const impl = new FirebaseImplementor();
//Database Abstraction
const coordDb = new CoordinateSetDataBase(impl);

//Analyzer Implementor
const analyzerImpl = new JerkAnalyzerImplementor();
//Analyzer Abstraction
const coordAnalyzer = new CoordinateSetAnalyzer(analyzerImpl);

/*
let coordinateSets = [];
for(let i = 0; i < 100; i++)
{
	coordinateSets.push(new CoordinateSet(Math.random() * 1000.0, Math.random() * 1000.0, Math.random() * 1000.0, 
		Date.now()));
}
*/

//coordDb.uploadData(coordinateSets);
let testData = coordDb.getData();
let coordinateSets = [];
testData.then(querySnapshot => querySnapshot.forEach(doc => console.log(doc)));
console.log("\n\n");
console.log(testData);

//Analyze the test data
//let activityTable = coordAnalyzer.analyzeData(testData);
//console.log(activityTable);


