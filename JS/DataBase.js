import DataBaseImplementor from "./DataBaseImplementor.js";

export default class DataBase
{
	constructor(implementor)
	{
		if(implementor instanceof DataBaseImplementor)
			this._implementor = implementor;
		else
			throw new TypeError(`${implementor} is not a DataBaseImplementor.`);
	}
	
	set implementor(implementor)
	{
		throw "implementor is a private field."
	}

	get implementor()
	{
		throw "implementor is a private field."
	}

	getData()
	{
		throw "getData() not implemented.";
	}

	uploadData(coordinateSets)
	{
		throw "uploadData() not implemented.";
	}
}
