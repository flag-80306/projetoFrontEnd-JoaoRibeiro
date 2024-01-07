// async function tourAPIInfo(url) {
// 	const response = await fetch(url);
// 	const result = await response.json();
// 	// console.log(result);
// 	return {
// 		id: result.info.id,
// 		name: result.info.name,
// 		lat: result.info.lat,
// 		lon: result.info.lon,
// 		icon: result.info.icon,
// 		date: result.info.date,
// 		city: result.info.city,
// 		country: result.info.country,
// 		duration: result.info.duration,
// 		price: result.info.name.price,
// 		shortDescription: result.info.shortDescription,
// 		description: result.info.description,
// 		cardIimageSRC: result.info.cardImage.src,
// 		cardIimageALT: result.info.cardImage.alt,
// 		slideInfo: result.info.slideInfo,
// 	};
// }

async function getToursData() {
	const response = await fetch('/mockAPI/mockAPIInfo.json');
	const result = await response.json();
	console.log(result);
	console.log(123);
	return result;
}

export default {
	// tourAPIInfo,
	getToursData,
};
