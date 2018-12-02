import CoordinateSet from "./CoordinateSet.js";
import Activity from "./Activity.js";
import CoordinateSetDataBase from "./CoordinateSetDataBase.js";
import FirebaseImplementor from "./FirebaseImplementor.js";

const impl = new FirebaseImplementor();
const coordDb = new CoordinateSetDataBase(impl);
console.log(coordDb);

let coordinateSets = [];
for(let i = 0; i < 100; i++)
{
	coordinateSets.push(new CoordinateSet(Math.random() * 1000.0, Math.random() * 1000.0, Math.random() * 1000.0, 
		Date.now()));
}

//coordDb.uploadData(coordinateSets);
coordDb.getData();




let activities = [];
for(let i = 0; i < 25; i++)
{
	activities.push(new Activity(Boolean(Math.round(Math.random())), Date.now(), Date.now()));
}

//console.log(activities);

//console.log(coord);
/* const coordDBRef = db.collection("CoordinateSets");

//query database
coordDBRef.get()
	.then(querySnapshot => querySnapshot.forEach(doc => console.log(doc.id, " => ", doc.data())))
	.catch(error => console.error("Error getting data: " , error)); */

//batch upload
/*
const batch = db.batch();


coordinateSets.forEach(coord => batch.set(coordDBRef.doc(String(Date.now())), {
	x: coord.x,
	y: coord.y,
	z: coord.z,
	timeStamp: coord.timeStamp
}));

batch.commit()
	.then(() => console.log("Write success!"))
	.catch(error => console.error("Error writing!: " , error));

*/	
	
//database test
/* db.collection("CoordinateSets").doc("test").set({
	x: coord.x,
	y: coord.y,
	z: coord.z,
	timeStamp: coord.timeStamp
	})
	.then(() => console.log("Write success!"))
	.catch(error => console.error("Error writing!: " , error)); */
