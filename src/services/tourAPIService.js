async function tourAPIInfo(url) {
	// const url = ;
	const response = await fetch(url);
	const result = await response.json();
	// console.log(result);
	return {
		cardIimageSRC: result.info.cardImage.src,
		cardIimageALT: result.info.cardImage.alt,
		name: result.info.name,
		duration: result.info.duration,
		shortDescription: result.info.shortDescription,
		price: result.info.name.price,
	};
}

async function getToursData() {
	const response = await fetch('/mockAPI/mockAPIInfo.json');
	const result = await response.json();

	return result;
}

export default {
	tourAPIInfo,
	getToursData,
};
