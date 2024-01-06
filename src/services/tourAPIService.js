async function tourAPIInfo(url) {
	const response = await fetch(url);
	const result = await response.json();
	// console.log(result);
	return {
		id: result.id,
		name: result.info.name,
		lat: result.lat,
		lon: result.lon,
		date: result.date,
		city: result.city,
		duration: result.info.duration,
		price: result.info.name.price,
		shortDescription: result.info.shortDescription,
		description: result.info.description,
		cardIimageSRC: result.info.cardImage.src,
		cardIimageALT: result.info.cardImage.alt,
		slideInfo: result.info.slideInfo,
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
