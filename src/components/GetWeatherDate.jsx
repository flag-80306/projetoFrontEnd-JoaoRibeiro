function GetWeatherDate() {
	const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	let objectDate = new Date();
	let year = objectDate.getFullYear();
	let month = objectDate.getMonth() + 1;
	let day = objectDate.getDate();
	let weekday = weekDay[objectDate.getDay()];

	if (day < 10) {
		day = `0${day}`;
	}

	if (month < 10) {
		month = `0${month}`;
	}

	let dateFormat = `${day}-${month}-${year}, ${weekday}`;

	return <>{dateFormat}</>;
}

export default GetWeatherDate;
