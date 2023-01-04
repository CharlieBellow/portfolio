import React from 'react'
import Portfolio from '../components/Portfolio'

export default function Home() {
  return (
		<>
			<div className="flex flex-col justify-center items-center text-center w-screen h-screen bg-bgDark gap-44">
				<h1 className="text-text text-5xl font-bold">
					Charlie's Portfolio
				</h1>
				<Portfolio />
			</div>
		</>
	);
}
