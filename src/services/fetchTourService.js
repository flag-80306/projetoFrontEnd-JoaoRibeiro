async function fetchTourInfo() {
	const url = '/mockAPI/mocakAPIInfo.json';
	const response = await fetch(url);
	const result = await response.json();
	// console.log(result);
	return {
		cardIimageSRC: result.info[0].cardImage.src,
		cardIimageALT: result.info[0].cardImage.alt,
		name: result.info[0].name,
		duration: result.info[0].duration,
		shortDescription: result.info[0].shortDescription,
		price: result.info[0].name.price,
	};
}

{
	/* async function getPokemonList(limit = 5) {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=' + limit);
	const result = await response.json();

	return result.results;
} */
}

export default {
	fetchTourInfo,
	// getPokemonList,
};
