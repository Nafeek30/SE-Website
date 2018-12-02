import CoordinateSet from "./CoordinateSet.js";
import Activity from "./Activity.js";
import ActivityTable from "./ActivityTable.js";

export default class TestAnalyzerImplementor
{
	analyzeData(coordinateSets)
	{
		let activities = [];
		for(let i = 0; i < coordinateSets.length - 1; i++)
		{
			let x = coordinateSets[i + 1].x - coordinateSets[i].x;
			let y = coordinateSets[i + 1].y - coordinateSets[i].y;
			let z = coordinateSets[i + 1].z - coordinateSets[i].z;
			
			let isMoving = false;
			let torque = Math.sqrt(Math.pow(x,2) + Math.pow(y,2) + Math.pow(z,2));
			if(torque >= 0.5) isMoving = true;

			// continue algorithm
			// after isMoving is known for all coords, make activities list with start and end times
			// fill activity table, return
		}
	}
}
