class DataAnalyzer
{
	constructor(implementor)
	{
		if(implementor instanceof DataAnalyzerImplementor)
			this._implementor = implementor;
		else
			throw new TypeError(`${implementor} is not a DataAnalyzerImplementor.`);
	}
	
	set implementor(implementor)
	{
		throw `implementor is a private field.`
	}
	
	get implementor()
	{
		throw `implementor is a private field.`
	}
	
	analyzeData(coordinateSets)
	{
		throw "analyzeData is not implemented."
	}
}