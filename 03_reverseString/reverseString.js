const reverseString = function(str) {
	let stringArr = str.split("");
	let returnString = "";
	for(let i = stringArr.length-1; i >= 0; --i)
	{
		returnString += stringArr[i];
	}
	return returnString;
};

// Do not edit below this line
module.exports = reverseString;
