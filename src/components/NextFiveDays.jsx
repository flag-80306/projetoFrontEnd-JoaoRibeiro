function NextFiveDays() {
	const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	// Função que recebe uma data e um número de dias e retorna a data futura
	// const getNextDate = (date, days) => {
	function getNextDate(date, daysToAdd) {
		const result = new Date(date);
		result.setDate(result.getDate() + daysToAdd);
		return result;
		//1º o result vai receber a data do dia atual, que será ajustada através do .setDate, retornando o dia atual com o getDate e calcula a nova data adicionando o daysToAdd, resultando na nova data (dia seguinte).
	}

	const getNextFiveDays = [];
	// Obtém a data atual
	let currentDate = new Date();
	// Date() representa a data e hora atual no momento em que é chamada
	currentDate = getNextDate(currentDate, 1);
	// Loop que itera cinco vezes para obter os próximos cinco dias
	for (let i = 0; i < 5; i++) {
		// Obtém o ano, mês, dia e dia da semana da data atual
		let year = currentDate.getFullYear();
		let month = currentDate.getMonth() + 1;
		let day = currentDate.getDate();
		let weekday = weekDay[currentDate.getDay()];

		if (day < 10) {
			day = `0${day}`;
		}
		if (month < 10) {
			month = `0${month}`;
		}

		let dateFormat = `${day}-${month}-${year}`;

		// Com o .push() adiciono uma data e dia da semana ao array em forma de objeto
		getNextFiveDays.push({
			date: dateFormat,
			dayOfWeek: weekday,
		});

		// aqui obtemos o dia atual e adicionamos 1(days) à função para obter info do dia seguinte
		currentDate = getNextDate(currentDate, 1);
	}

	return getNextFiveDays;
}

export default NextFiveDays;
