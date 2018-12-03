import DataAnalyzerImplementor from "./DataAnalyzerImplementor.js";
import CoordinateSet from "./CoordinateSet.js";
import Activity from "./Activity.js";
import ActivityTable from "./ActivityTable.js";

export default class JerkAnalyzerImplementor extends DataAnalyzerImplementor
{
	analyzeData(coordinateSets)
	{
		//console.log(coordinateSets);
		let deltas =[];
		for(let i = 0; i < coordinateSets.length - 1; i++)
		{
			let x = coordinateSets[i + 1].x - coordinateSets[i].x;
			let y = coordinateSets[i + 1].y - coordinateSets[i].y;
			let z = coordinateSets[i + 1].z - coordinateSets[i].z;
			
			let isMoving = false;
			let torque = Math.sqrt(Math.pow(x,2) + Math.pow(y,2) + Math.pow(z,2));
			if(torque >= 0.5) isMoving = true;

			deltas.push({timestamp: coordinateSets[i].timestamp, isMoving: isMoving});
		}
		
		//console.log(deltas);

		let activities = [];
		let group = new Activity(deltas[0].isMoving, deltas[0].timestamp, 0);
		for(let i = 1; i < deltas.length; i++)
		{
			if(deltas[i].isMoving != group.isMoving)
			{
				group.endTime = deltas[i - 1].timestamp;
				activities.push(group);
				group.isMoving = deltas[i].isMoving;
				group.startTime = deltas[i].timestamp;
			}
		}
		
		return new ActivityTable(activities);
	}
}
