export default class ActivityTable
{
	constructor(activities)
	{
		this._activities = activities;
		//this._totalActiveDuration += 
		/* activities.forEach(activity => {
			console.log(activity);
		}); */
		//this._totalStationaryDuration += 
		activities.forEach(activity => {
            if(activity.isMoving) console.log(activity);
        }); 
	}
	
	get activities()
	{
		throw "activities is a private field.";
	}
	
	set activities(activities)
	{
		throw "activities is a private field.";
	}
	
	get totalActiveDuration()
	{
		throw "totalActiveDuration is a private field.";
	}
	
	set totalActiveDuration(duration)
	{
		throw "totalActiveDuration is a private field.";
	}
	
	get totalStationaryDuration()
	{
		throw "totalStationaryDuration is a private field.";
	}
	
	set totalStationaryDuration(duration)
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
