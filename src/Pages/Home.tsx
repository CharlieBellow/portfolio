
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
  return (
		<>
			<main className="flex flex-col items-center text-center justify-center bg-bgDark gap-2 w-fit h-full py-6 ">
				<Header/>
				<Portfolio />
				<Footer />
			</main>
		</>
	);
}
