function searchArray(arrayToSearch, query) {
	if (!Array.isArray(query) && query.length !== 2) {
		throw Error('query is not an array')
	}
	for (let i = 0; i < arrayToSearch.length; i++) {
		let subArr = arrayToSearch[i]
		if (query[0] === subArr[0] && query[1] === subArr[1]) { return i }
	}

	return -1
}
console.log(searchArray([[1, 2], [3, 4], [5, 6]], [1, 2]));
console.log(searchArray([[1, 2], [3, 4], [5, 6]], [5, 6]));
console.log(searchArray([[1, 2], [3, 4], [5, 6]], [9, 2]));
console.log(searchArray([[1, 2], [3, 4], [5, 6]], 1));