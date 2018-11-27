class CoordinateSetAnalyzer
{
	analyzeData(coordinateSets)
	{
		if(Array.isArray(coordinateSets) && coordinateSets.every(x => 
			x instanceof CoordinateSet
		))
			return this._implementor.analyzeData(coordinateSets);
		else
			throw new TypeError("Not a list of CoordinateSets.");
	}
}