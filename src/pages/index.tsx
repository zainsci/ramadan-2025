import React, { useState } from "react"
import Calendar from "../components/Calendar"
import { DayDetails } from "../types"

const RamadanCalendar: React.FC = () => {
	const [selectedDay, setSelectedDay] = useState<DayDetails | null>(null)

	return (
		<div className="flex flex-col items-center justify-center p-4">
			<h1 className="text-3xl font-bold mb-6">Ramadan Calendar 2025</h1>
			<Calendar selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
		</div>
	)
}

export default RamadanCalendar
