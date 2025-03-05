import React, { useState } from "react"
import Calendar from "../components/Calendar"
import { DayDetails } from "../types"

const RamadanCalendar: React.FC = () => {
	const [selectedDay, setSelectedDay] = useState<DayDetails | null>(null)

	return (
		<div className="flex flex-col items-center justify-center p-4">
			<h1 className="text-3xl font-bold text-center">Ramadan Calendar</h1>
			<p className="text-xl mb-6">1446 AH / 2025 AD</p>
			<Calendar selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
		</div>
	)
}

export default RamadanCalendar
