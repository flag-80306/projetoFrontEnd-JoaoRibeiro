async function getTourData() {
	const response = await fetch('/mockAPI/mockAPIInfo.json');
	const result = await response.json();
	console.log(result);
	console.log(123);
	return result;
}

export default {
	getTourData,
};
