import React, { Dispatch, SetStateAction } from "react"
import { DayDetails } from "../types"
import { formatDate } from "@/lib/utils"
import Star from "./Star"

interface DayPopupProps {
	state: boolean
	setState: React.Dispatch<SetStateAction<boolean>>
}

const DuaPopup: React.FC<DayPopupProps> = ({ state, setState }) => {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
			<div className="bg-white p-8 border-2 border-black max-w-2xl w-full relative overflow-hidden flex flex-col gap-4">
				<div className="flex gap-4 text-center h-full">
					<div className="flex-1 flex flex-col sehr">
						<h1 className="text-2xl font-bold mb-6 uppercase bg-purple-200 px-4 py-2 rounded-md">
							DUA FOR SEHR
						</h1>
						<p className="text-center text-xl bg-gray-100 p-4 rounded-md flex-1">
							<span className="font-bold">
								وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ
							</span>
							<hr className="my-4 border-y-2" />
							Wa bisawmi ghadinn nawaiytu min shahri Ramadan
							<hr className="my-4 border-y-2" />I intend to keep the fast for
							tomorrow in the month of Ramadan
						</p>
					</div>
					<div className="flex-1 flex flex-col ifatr">
						<h1 className="text-2xl font-bold mb-6 uppercase bg-purple-200 px-4 py-2 rounded-md">
							DUA FOR IFTAR
						</h1>
						<p className="text-center text-xl bg-gray-100 p-4 rounded-md">
							<span className="font-bold">
								اللهم إني لك صمت، وبك آمنت، وعليك توكلت، وعلى رزقك أفطرت
							</span>
							<hr className="my-4 border-y-2" />
							Allahumma inni laka sumtu, wa bika aamantu, wa alayka tawakkaltu,
							wa ala rizq-ika-aftartu.
							<hr className="my-4 border-y-2" />O Allah! I have fasted for You,
							I believe in You, I put my trust in You, and with Your provision,
							I break my fast.
						</p>
					</div>
				</div>
				<button
					className="bg-gray-200 px-6 py-3 rounded-md uppercase hover:bg-blue-400 hover:text-black"
					onClick={() => setState(!state)}
				>
					Close
				</button>
			</div>
		</div>
	)
}

export default DuaPopup
