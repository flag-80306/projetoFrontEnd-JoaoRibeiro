function GetWeatherDate({ dateInfo }) {
	return (
		<div style={{ textAlign: 'center', margin: 'auto' }}>
			{dateInfo.date}, {dateInfo.dayOfWeek}
		</div>
	);
}

export default GetWeatherDate;
