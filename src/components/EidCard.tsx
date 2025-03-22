import React, { useState, useRef } from "react"

const EidCardGenerator = () => {
	const [message, setMessage] = useState("")
	const [namePosition, setNamePosition] = useState({ x: 150, y: 200 })
	const [isDragging, setIsDragging] = useState(false)
	const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
	const [backgroundImage, setBackgroundImage] = useState(
		"/api/placeholder/600/400"
	)
	const [heading, setHeading] = useState("Eid Mubarak!")
	const [headingFontSize, setHeadingFontSize] = useState(24)
	const [messageFontSize, setMessageFontSize] = useState(24)
	const [headingFont, setHeadingFont] = useState("Poppins")
	const [messageFont, setMessageFont] = useState("Winky Sans")
	const cardRef = useRef(null)
	const textRef = useRef(null)
	const [textColors, setTextColors] = useState({
		heading: "#000",
		message: "#000",
	})

	const handleImageUpload = (e: any) => {
		const file = e.target.files[0]
		if (file && file.type.match("image.*")) {
			const reader = new FileReader()
			reader.onload = (event) => {
				setBackgroundImage(event?.target?.result as any)
			}
			reader.readAsDataURL(file)
		}
	}

	const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		setIsDragging(true)
		const offsetX = e.clientX - namePosition.x
		const offsetY = e.clientY - namePosition.y
		setDragOffset({ x: offsetX, y: offsetY })
	}

	const handleMouseMove = (e: any) => {
		if (isDragging && cardRef.current) {
			const rect = (cardRef.current as any).getBoundingClientRect()
			const newX = Math.min(Math.max(e.clientX - dragOffset.x, 0), rect.width)
			const newY = Math.min(Math.max(e.clientY - dragOffset.y, 0), rect.height)
			setNamePosition({ x: newX, y: newY })
		}
	}

	const handleMouseUp = () => {
		setIsDragging(false)
	}

	const exportAsPNG = () => {
		if (!cardRef.current) return

		import("html-to-image").then((htmlToImage) => {
			htmlToImage
				.toPng(cardRef.current as any)
				.then((dataUrl) => {
					const link = document.createElement("a")
					link.download = `eid-card-${message.replace(/\s+/g, "-")}.png`
					link.href = dataUrl
					link.click()
				})
				.catch((error) => {
					console.error("Error exporting image:", error)
					alert("Failed to export image. Please try again.")
				})
		})
	}

	const fontOptions = [
		{ value: "Boldonse", label: "Boldonse" },
		{ value: "Winky Sans", label: "Winky Sans" },
		{ value: "Poppins", label: "Poppins" },
		{ value: "Quicksand", label: "Quicksand" },
		{ value: "Josefin Sans", label: "Josefin Sans" },

		{ value: "sans-serif", label: "Sans Serif" },
		{ value: "serif", label: "Serif" },
		{ value: "monospace", label: "Monospace" },
		{ value: "cursive", label: "Cursive" },
		{ value: "fantasy", label: "Fantasy" },
		{ value: "system-ui", label: "System UI" },
		{ value: "Arial, sans-serif", label: "Arial" },
		{ value: "Verdana, sans-serif", label: "Verdana" },
		{ value: "Georgia, serif", label: "Georgia" },
		{ value: "Courier New, monospace", label: "Courier New" },
		{ value: "Times New Roman, serif", label: "Times New Roman" },
		{ value: "Trebuchet MS, sans-serif", label: "Trebuchet MS" },
	]

	return (
		<div className="flex flex-col md:flex-row gap-6 w-full p-6 bg-gray-50 rounded-lg max-w-6xl">
			<div className="w-full md:w-1/2 flex flex-col justify-center items-center">
				<div className="mb-4 font-semibold text-lg">Card Preview</div>
				<div
					ref={cardRef}
					className="p-4 relative w-full h-96 bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
					style={{
						backgroundImage: `url(${backgroundImage})`,
						width: "400px",
						height: "600px",
					}}
					onMouseMove={handleMouseMove}
					onMouseUp={handleMouseUp}
					onMouseLeave={handleMouseUp}
				>
					<div
						className="absolute top-8 left-0 w-full text-center font-bold"
						style={{
							color: textColors.heading,
							fontSize: `${messageFontSize + 12}px`,
							fontFamily: headingFont,
						}}
					>
						{heading}
					</div>

					{/* Draggable name */}
					{message && (
						<div
							ref={textRef}
							className="absolute cursor-move"
							style={{
								left: `${namePosition.x}px`,
								top: `${namePosition.y}px`,
								color: textColors.message,
								fontSize: `${headingFontSize}px`,
								fontFamily: messageFont,
							}}
							onMouseDown={handleMouseDown}
						>
							<span className="font-semibold flex items-center text-center gap-2 p-2">
								{message}
							</span>
						</div>
					)}
				</div>
			</div>

			<div className="w-full md:w-1/2 space-y-4">
				<div className="mb-4 font-semibold text-lg">
					Customize Your Eid Card
				</div>

				{/* Image Upload */}
				<div>
					<label className="block text-sm font-medium mb-2">
						Background Image
					</label>
					<input
						type="file"
						accept="image/*"
						onChange={handleImageUpload}
						className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
					/>
				</div>

				{/* Message */}
				<div>
					<label className="block text-sm font-medium mb-2">Heading</label>
					<input
						type="text"
						value={heading}
						onChange={(e) => setHeading(e.target.value)}
						className="w-full px-4 py-2 border border-gray-300 rounded-md"
						placeholder="Eid Mubarak!"
					/>
				</div>

				{/* Name Input */}
				<div>
					<label className="block text-sm font-medium mb-2">Message</label>
					<input
						type="text"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						className="w-full px-4 py-2 border border-gray-300 rounded-md"
						placeholder="Enter Message here"
					/>
					<p className="text-xs text-gray-500 mt-1">
						Drag to position the name on the card
					</p>
				</div>

				{/* Text Style Controls */}
				<div className="w-full">
					<h3>Heading Color & Size</h3>
					<div className="flex w-full gap-4 items-center">
						<div className="w-1/2 flex-1">
							<input
								type="color"
								value={textColors.heading}
								onChange={(e) =>
									setTextColors({ ...textColors, heading: e.target.value })
								}
								className="w-full h-10 cursor-pointer rounded-md"
							/>
						</div>
						<div className="w-1/2 flex gap-2 items-center">
							<input
								type="range"
								min="12"
								max="48"
								value={messageFontSize}
								onChange={(e) => setMessageFontSize(parseInt(e.target.value))}
								className="w-full"
							/>
							<div className="text-xs text-center mt-1">
								{messageFontSize}px
							</div>
						</div>
					</div>
				</div>

				<div className="w-full">
					<h3>Message Color & Size</h3>
					<div className="flex gap-4 w-full items-center">
						<div className="w-1/2 flex-1">
							<input
								type="color"
								value={textColors.message}
								onChange={(e) =>
									setTextColors({ ...textColors, message: e.target.value })
								}
								className="w-full h-10 cursor-pointer rounded-md"
							/>
						</div>
						<div className="w-1/2 flex gap-2 items-center">
							<input
								type="range"
								min="12"
								max="48"
								value={headingFontSize}
								onChange={(e) => setHeadingFontSize(parseInt(e.target.value))}
								className="w-full"
							/>
							<div className="text-xs text-center mt-1">
								{headingFontSize}px
							</div>
						</div>
					</div>
				</div>

				<div className="flex items-center gap-4">
					<div className="flex-1">
						<label className="block text-sm font-medium mb-2">
							Heading Font Font
						</label>
						<select
							value={headingFont}
							onChange={(e) => setHeadingFont(e.target.value)}
							className="w-full px-4 py-2 border border-gray-300 rounded-md"
							style={{ fontFamily: headingFont }}
						>
							{fontOptions.map((font) => (
								<option
									key={font.value}
									value={font.value}
									style={{ fontFamily: font.value }}
								>
									{font.label}
								</option>
							))}
						</select>
					</div>

					<div className="flex-1">
						<label className="block text-sm font-medium mb-2">
							Message Font
						</label>
						<select
							value={messageFont}
							onChange={(e) => setMessageFont(e.target.value)}
							className="w-full px-4 py-2 border border-gray-300 rounded-md"
							style={{ fontFamily: messageFont }}
						>
							{fontOptions.map((font) => (
								<option
									key={font.value}
									value={font.value}
									style={{ fontFamily: font.value }}
								>
									{font.label}
								</option>
							))}
						</select>
					</div>
				</div>

				<button
					onClick={exportAsPNG}
					className="w-full mt-6 py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-md shadow-sm transition-colors"
				>
					Export as PNG
				</button>
			</div>
		</div>
	)
}

export default EidCardGenerator
