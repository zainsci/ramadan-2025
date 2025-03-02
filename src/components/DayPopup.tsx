import React from "react"
import { DayDetails } from "../types"
import { formatDate } from "@/lib/utils"
import Star from "./Star"

interface DayPopupProps {
	day: DayDetails
	onClose: () => void
}

const DayPopup: React.FC<DayPopupProps> = ({ day, onClose }) => {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
			<div className="bg-white p-8 border-2 border-black font-mono max-w-xl w-full relative overflow-hidden">
				<h2 className="text-2xl font-bold mb-6 uppercase">
					RAMADAN DAY {day.dayNumber}
				</h2>
				<p className="text-lg mb-2">
					<strong className="uppercase">DATE:</strong>{" "}
					{formatDate(day.date).toUpperCase()}
				</p>
				<p className="text-lg mb-2">
					<strong className="uppercase">SEHR TIME:</strong> {day.sehrTime}
				</p>
				<p className="text-lg mb-4">
					<strong className="uppercase">IFTAR TIME:</strong> {day.iftarTime}
				</p>
				<button
					className="mt-6 bg-black text-white px-8 py-3 uppercase hover:bg400 hover:text-blue-300 border-2 border-black"
					onClick={onClose}
				>
					Close
				</button>
				<Star className="absolute right-1/2   animate-spin" />
			</div>
		</div>
	)
}

export default DayPopup
