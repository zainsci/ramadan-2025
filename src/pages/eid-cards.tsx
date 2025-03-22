import EidCard from "@/components/EidCard"
import React from "react"

const EidCards: React.FC = () => {
	return (
		<div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
			<h1 className="text-3xl font-bold mb-6">Eid Wishing Cards</h1>
			<EidCard />
		</div>
	)
}

export default EidCards
