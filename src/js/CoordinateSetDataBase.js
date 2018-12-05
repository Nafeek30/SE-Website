import DataBase from "./DataBase.js";
import CoordinateSet from "./CoordinateSet.js";

export default class CoordinateSetDataBase extends DataBase
{
	getData()
	{
		return this._implementor.getData();
	}

	uploadData(coordinateSets)
	{
		if(Array.isArray(coordinateSets) && coordinateSets.every(x =>
			x instanceof CoordinateSet
		))
			this._implementor.uploadData(coordinateSets);
		else
			throw new TypeError("Not a list of CoordinateSets.");
	}
}
