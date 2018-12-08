import DataBaseImplementor from "./DataBaseImplementor.js";
import CoordinateSet from "./CoordinateSet.js";

export default class FireStorageImplementor extends DataBaseImplementor
{
    getData()
    {
        return db.collection("CSV").get()
			.catch(error => console.error("Error querying database: ", error));
    }

    uploadData(csv)
    {
        try
        {
            storage.child(csv.name).put(csv)
				.then(snapshot => {
					snapshot.ref.getDownloadURL()
						.then(downloadURL => {
							//console.log(downloadURL);
							//console.log(csv.name);
							db.collection("CSV").doc(csv.name).set({name: csv.name, date: Date.now(), downloadUrl: downloadURL})
								.then(console.log("CSV upload successful!"))
								.catch(error => console.error("Error uploading to cloud storage: ", error));
						});
				});
        }
        catch(error)
        {
            console.error("Error uploading to cloud storage: ", error);
        }
    }
}

