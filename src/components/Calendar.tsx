import React, { useState, useEffect } from "react"
import { DayDetails } from "../types"
import DayPopup from "./DayPopup"
import { formatDate } from "../lib/utils"

interface CalendarProps {
	selectedDay: DayDetails | null
	setSelectedDay: (day: DayDetails | null) => void
}

const Calendar: React.FC<CalendarProps> = ({ selectedDay, setSelectedDay }) => {
	const startDate = new Date("2025-03-01")
	const currentDate = new Date("2025-02-26")
	const [days, setDays] = useState<DayDetails[]>([])

	useEffect(() => {
		const generateDays = () => {
			const daysArray: DayDetails[] = []
			for (let i = 0; i < 30; i++) {
				const date = new Date(startDate)
				date.setDate(startDate.getDate() + i)
				daysArray.push({
					date,
					dayNumber: i + 1,
				})
			}
			setDays(daysArray)
		}
		generateDays()
	}, [])

	const handleDayClick = (day: DayDetails) => {
		setSelectedDay(day)
	}

	const handlePrint = () => {
		window.print()
	}

	const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

	const firstDayIndex = startDate.getDay()
	const emptyCells = Array(firstDayIndex).fill(null)

	return (
		<div className="w-full max-w-4xl font-mono">
			<div className="print:hidden">
				<button
					onClick={handlePrint}
					className="mb-8 bg-black text-white px-6 py-3 font-mono uppercase hover:bg-blue-400 hover:text-black border-2 border-black"
				>
					Print Calendar
				</button>

				<div className="grid grid-cols-7 mb-2" id="calendar-grid">
					{weekdays.map((day, index) => (
						<div
							key={index}
							className="p-4 text-center font-bold bg-black text-white"
						>
							{day}
						</div>
					))}

					{emptyCells.map((_, index) => (
						<div
							key={`empty-${index}`}
							className="p-4 bg-gray-100 border-2 border-gray-100"
						/>
					))}
					{days.map((day) => {
						const isPast = day.date < currentDate
						const isToday =
							day.date.toDateString() === currentDate.toDateString()
						const dayOfWeek = day.date.getDay()
						const isFriday = dayOfWeek === 5
						const isSunday = dayOfWeek === 0

						return (
							<div
								key={day.dayNumber}
								className={`p-4 text-center cursor-pointer transition-colors border-2 border-transparent
                  ${
										isPast
											? "bg-gray-300 text-gray-600 border-gray-400"
											: "bg-white border-black"
									}
                  ${isToday ? "bg-blue-400 border-black" : ""}
                  ${isFriday ? "bg-green-100 border-green-800" : ""}
                  ${isSunday ? "bg-blue-100 border-blue-800" : ""} 
                  hover:bg-blue-200 hover:border-blue-400`}
								onClick={() => handleDayClick(day)}
							>
								<p className="font-bold text-xl">DAY {day.dayNumber}</p>
								<p className="uppercase">
									{formatDate(day.date).split(",")[0]}
								</p>
							</div>
						)
					})}
					{emptyCells.map((_, index) => (
						<div
							key={`empty-${index}`}
							className="p-4 bg-gray-100 border-2 border-gray-100"
						/>
					))}
				</div>
			</div>

			<div className="hidden print:block print:w-full print:h-full">
				<div className="grid grid-cols-7">
					{weekdays.map((day, index) => (
						<div
							key={index}
							className="p-2 text-center font-bold bg-black text-white"
						>
							{day}
						</div>
					))}
					{emptyCells.map((_, index) => (
						<div
							key={`empty-${index}`}
							className="p-2 bg-gray-200 border-2 border-gray-400"
						/>
					))}
					{days.map((day) => {
						const dayOfWeek = day.date.getDay()
						const isFriday = dayOfWeek === 5
						const isSunday = dayOfWeek === 0

						return (
							<div
								key={day.dayNumber}
								className={`p-2 text-center border-2 border-black
                  ${isFriday ? "bg-green-100" : ""}
                  ${isSunday ? "bg-blue-100" : ""}`}
							>
								<p className="font-bold">DAY {day.dayNumber}</p>
								<p className="uppercase">{formatDate(day.date)}</p>
							</div>
						)
					})}
					{emptyCells.map((_, index) => (
						<div
							key={`empty-${index}`}
							className="p-4 bg-gray-200 border-2 border-gray-400"
						/>
					))}
				</div>
			</div>

			{selectedDay && (
				<DayPopup day={selectedDay} onClose={() => setSelectedDay(null)} />
			)}
		</div>
	)
}

export default Calendar
