export const formatDate = (date: Date): string => {
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	]

	const day = date.getDate()
	const month = months[date.getMonth()]
	const year = date.getFullYear()

	// Add ordinal suffix (st, nd, rd, th)
	const getOrdinalSuffix = (day: number): string => {
		if (day > 3 && day < 21) return "th" // 4th to 20th
		switch (day % 10) {
			case 1:
				return "st"
			case 2:
				return "nd"
			case 3:
				return "rd"
			default:
				return "th"
		}
	}

	return `${month} ${day}${getOrdinalSuffix(day)}, ${year}`
}
