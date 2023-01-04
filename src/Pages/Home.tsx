import React from 'react'
import Portfolio from '../components/Portfolio'

export default function Home() {
  return (
		<>
			<div className="flex flex-col  items-center text-center bg-bgDark gap-2 w-screen h-full py-6">
				<h1 className="text-text text-5xl font-bold">Charlie's Portfolio</h1>
				<Portfolio />
			</div>
		</>
	);
}
