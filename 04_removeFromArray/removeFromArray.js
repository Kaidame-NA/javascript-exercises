const removeFromArray = function(arr, ...args) {
	let returnArr = [];
	arr.forEach(element => {
		if(!args.includes(element))
		{
			returnArr.push(element);
		}
	})
	return returnArr;
};

// Do not edit below this line
module.exports = removeFromArray;
