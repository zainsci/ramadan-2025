import React, { useState, useEffect } from "react"
import { DayDetails } from "../types"
import DayPopup from "./DayPopup"
import { formatDate } from "../lib/utils"
import DuaPopup from "./DuaPopup"

interface CalendarProps {
	selectedDay: DayDetails | null
	setSelectedDay: (day: DayDetails | null) => void
}

const Calendar: React.FC<CalendarProps> = ({ selectedDay, setSelectedDay }) => {
	const startDate = new Date("2025-03-01")
	const currentDate = new Date("2025-02-26")
	const [days, setDays] = useState<DayDetails[]>([])
	const [showDua, setShowDua] = useState(false)

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
		<div className="w-full max-w-4xl">
			<div className="print:hidden">
				<div className="flex justify-end gap-2">
					<button
						onClick={() => setShowDua(!showDua)}
						className="mb-4 bg-gray-200 px-6 py-3 rounded-md uppercase hover:bg-blue-400 hover:text-black"
					>
						Du'as
					</button>
					<button
						onClick={handlePrint}
						className="mb-4 bg-gray-200 px-6 py-3 rounded-md uppercase hover:bg-blue-400 hover:text-black"
					>
						Print Calendar
					</button>
				</div>

				<div className="grid grid-cols-7 mb-2 gap-2" id="calendar-grid">
					{weekdays.map((day, index) => (
						<div
							key={index}
							className="p-4 text-center font-bold bg-black text-white rounded-md"
						>
							{day}
						</div>
					))}

					{emptyCells.map((_, index) => (
						<div
							key={`empty-${index}`}
							className="p-4 border-2 border-gray-100 rounded-md"
						/>
					))}
					{days.map((day) => {
						const isPast = day.date < currentDate
						const isToday =
							day.date.toDateString() === new Date().toDateString()
						console.log(day.date.toDateString(), new Date().toDateString())
						const dayOfWeek = day.date.getDay()
						const isFriday = dayOfWeek === 5
						const isSunday = dayOfWeek === 0

						return (
							<div
								key={day.dayNumber}
								className={`p-4 text-center cursor-pointer transition-colors border-2 rounded-md
                  ${
										isPast
											? "bg-gray-300 text-gray-600 border-gray-400"
											: isToday
											? "bg-purple-300 border-purple-300"
											: "bg-gray-200 border-gray-200"
									}
                  ${isToday ? "bg-blue-400 border-black" : ""}
                  hover:bg-purple-200 hover:border-purple-200`}
								onClick={() => handleDayClick(day)}
							>
								<p className="font-bold text-xl">{day.dayNumber}</p>
								<p className="uppercase">
									{formatDate(day.date).split(",")[0]}
								</p>
							</div>
						)
					})}
					{emptyCells.map((_, index) => (
						<div
							key={`empty-${index}`}
							className="p-4 border-2 border-gray-100 rounded-md"
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
								<p className="font-bold">{day.dayNumber}</p>
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

			{showDua && <DuaPopup state={showDua} setState={setShowDua} />}
		</div>
	)
}

export default Calendar
