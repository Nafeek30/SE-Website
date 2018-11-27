class TestDataBaseImplementor extends DataBaseImplementor
{
	getData()
	{
		let coordinateSets = [];
		for(let i = 0; i < 100; i++)
		{
			coordinateSets.push(new CoordinateSet(Math.random() * 1000.0, Math.random() * 1000.0, Math.random() * 1000.0, 
				Math.random() * 1000));
		}
		return coordinateSets;
	}
	
	uploadData(coordinateSets)
	{
		console.log(coordinateSets);
	}
}