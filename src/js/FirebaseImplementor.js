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
		try
		{
			coordinateSets.forEach(coord => db.collection("CoordinateSets").doc(String(Date.now())).set({
				x: coord.x,
				y: coord.y,
				z: coord.z,
				timestamp: coord.timestamp
			}));
		}
		catch(error)
		{
			console.error("Error uploading to database: ", error);
		}
	}
}
