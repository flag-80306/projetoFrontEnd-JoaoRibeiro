async function getVideoData() {
	const response = await fetch('/mockAPI/mockAPIVideo.json');
	const result = await response.json();

	return result;
}

export default getVideoData;
