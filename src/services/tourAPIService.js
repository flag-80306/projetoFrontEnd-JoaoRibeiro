async function getToursData() {
	const response = await fetch('/mockAPI/mockAPIInfo.json');
	const result = await response.json();

	return result;
}

export default {
	getToursData,
};
