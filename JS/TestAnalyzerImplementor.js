import DataAnalyzerImplementor from "./DataAnalyzerImplementor.js";

export default class TestAnalyzerImplementor extends DataAnalyzerImplementor
{
	analyzeData(coordinateSets)
	{
		console.log(coordinateSets);
	}
}
