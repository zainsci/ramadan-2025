import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

interface LayoutProps {
	children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const router = useRouter()

	return (
		<div className="min-h-screen bg-white flex flex-col">
			{/* Brutalist Navbar - will be hidden during print */}
			<nav className="bg-black text-white p-4 border-b-8 border-blue-400 print:hidden">
				<div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
					<h1 className="text-2xl font-bold uppercase tracking-widest">
						MY RAMADAN APP
					</h1>
					<div className="flex gap-8 text-lg">
						<Link
							href="/"
							className={`uppercase ${
								router.pathname === "/"
									? "text-blue-400 font-bold"
									: "text-white hover:text-blue-400"
							}`}
						>
							Calendar
						</Link>
						<Link
							href="/eid-cards"
							className={`uppercase ${
								router.pathname === "/eid-cards"
									? "text-blue-400 font-bold"
									: "text-white hover:text-blue-400"
							}`}
						>
							Eid Cards
						</Link>
					</div>
				</div>
			</nav>

			{/* Main Content */}
			<main className="flex-grow p-4 flex justify-center">
				<div className="w-full max-w-4xl">{children}</div>
			</main>

			{/* Brutalist Footer - will be hidden during print */}
			<footer className="bg-black text-white p-4 text-center border-t-8 border-blue-400 print:hidden">
				<p>© 2025 ZAINSCI / ALL RIGHTS RESERVED</p>
			</footer>
		</div>
	)
}

export default Layout
