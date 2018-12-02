export default class ActivityTable
{
	constructor(activities)
	{
		this._activities = activities;
		//this._totalActiveDuration = something
		//this._totalStationaryDuration = something
	}
	
	get activities()
	{
		throw "activities is a private field.";
	}
	
	set activities()
	{
		throw "activities is a private field.";
	}
	
	get totalActiveDuration()
	{
		throw "totalActiveDuration is a private field.";
	}
	
	set totalActiveDuration()
	{
		throw "totalActiveDuration is a private field.";
	}
	
	get totalStationaryDuration()
	{
		throw "totalStationaryDuration is a private field.";
	}
	
	set totalStationaryDuration()
	{
		throw "totalStationaryDuration is a private field.";
	}
	
	getTable()
	{
		return this._activities;
	}
	
	getActiveDuration()
	{
		return this._totalActiveDuration;
	}
	
	getStationaryDuration()
	{
		return this._totalStationaryDuration;
	}
}
