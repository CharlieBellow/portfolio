import React from 'react'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'

export default function Home() {
  return (
		<>
			<div className="flex flex-col items-center text-center justify-center bg-bgDark gap-2 w-fit h-full py-6 ">
				<Portfolio />
				<Footer />
			</div>
		</>
	);
}
