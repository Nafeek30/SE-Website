export default class ActivityTable
{
	constructor(activities)
	{
		this._activities = activities;
		this._totalActiveDuration = 0;
		this._totalStationaryDuration = 0;

		activities.forEach(activity => {
				if (activity.isMoving) this._totalActiveDuration += (activity.endTime - activity.startTime);
				else this._totalStationaryDuration += (activity.endTime - activity.startTime);
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
