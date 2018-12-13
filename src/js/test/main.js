import Activity from "../Activity.js";
import ActivityTable from "../ActivityTable.js";
import JerkAnalyzerImplementor from "../JerkAnalyzerImplementor.js";
import CoordinateSet from "../CoordinateSet.js";
import CoordinateSetAnalyzer from "../CoordinateSetAnalyzer.js";

//Real Tests
describe("ActivityTableSuite", () => {
	const activity1 = new Activity(true, 1, 2);
	const activity2 = new Activity(false, 2, 3);
	const activities = [];
	activities.push(activity1);
	activities.push(activity2);
	const activityTable = new ActivityTable(activities);
	
	it("should have at least one activity", () => {
		expect(activityTable.getTable().length).toBeGreaterThan(0);
	});
	
	it("should sum its activities' stationary times into a total stationary duration", ()=>{
		expect(activityTable.getStationaryDuration()).toBe(1);
	});
	
	it("should sum its activities' active times into a total active duration", ()=>{
		expect(activityTable.getActiveDuration()).toBe(1);
	});
});

describe("JerkAnalyzerImplementorSuite", () =>{
	const coordinateSet1 = new CoordinateSet(2.3, 3.2, 2.33, 100);
	const coordinateSet2 = new CoordinateSet(4.3, 4.2, 4.33, 200);
	const coordinateSets = [];
	coordinateSets.push(coordinateSet1);
	coordinateSets.push(coordinateSet2);
	const jerkAnalyzerImplementor = new JerkAnalyzerImplementor();
	
	it("should output an ActivityTable", () =>{
		expect(jerkAnalyzerImplementor.analyzeData(coordinateSets)).toEqual(jasmine.any(ActivityTable));
	});
});
		
describe("CoordinateSetAnalyzerSuite", () => {
	const coordinateSet1 = new CoordinateSet(2.3, 3.2, 2.33, 100);
	const coordinateSet2 = new CoordinateSet(4.3, 4.2, 4.33, 200);
	const coordinateSets = [];
	coordinateSets.push(coordinateSet1);
	coordinateSets.push(coordinateSet2);
	const jerkAnalyzerImplementor = new JerkAnalyzerImplementor();
	const coordinateSetAnalyzer = new CoordinateSetAnalyzer(jerkAnalyzerImplementor);
	
	it("should output an ActivityTable", () =>{
		expect(coordinateSetAnalyzer.analyzeData(coordinateSets)).toEqual(jasmine.any(ActivityTable));
	});
	
	it("should not exist without an implementor", () => {
		expect(() => { return new CoordinateSetAnalyzer()}).toThrowError();
	});
});
