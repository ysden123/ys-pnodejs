/**
 * Reading data from file.
 * 
 * @author Yuriy Stul
 */

fs = require('fs');

fs.readFile('./resources/testData.txt', 'utf8', function(err,data){
	if (err){
		return console.log(err);
	}
	console.log(data)
})
