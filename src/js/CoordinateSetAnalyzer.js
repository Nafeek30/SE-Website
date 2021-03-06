import DataAnalyzer from "./DataAnalyzer.js";
import CoordinateSet from "./CoordinateSet.js";

export default class CoordinateSetAnalyzer extends DataAnalyzer
{
	analyzeData(coordinateSets)
	{
		if(Array.isArray(coordinateSets) && coordinateSets[0] instanceof CoordinateSet)
			return this._implementor.analyzeData(coordinateSets);
		else
			throw new TypeError("Not a list of CoordinateSets.");
	}
}
