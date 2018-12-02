import DataBaseImplementor from "./DataBaseImplementor.js";
import CoordinateSet from "./CoordinateSet.js";

export default class FirebaseImplementor extends DataBaseImplementor
{
	getData()
	{
		return db.collection("CoordinateSets").get()
			.catch(error => console.error("Error querying database: ", error));
	}

	uploadData(coordinateSets)
	{
		const batch = db.batch();
		coordinateSets.forEach(coord => batch.set(db.collection("CoordinateSets").doc(String(Date.now())), {
			x: coord.x,
			y: coord.y,
			z: coord.z,
			timeStamp: coord.timeStamp
		}));
		batch.commit()
			.then(() => console.log("Upload Successful!"))
			.catch(error => console.error("Error uploading to database: ", error));
	}
}
