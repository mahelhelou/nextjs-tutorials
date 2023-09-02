import Link from 'next/link'
import { useRouter } from 'next/router'

const Home = () => {
	const router = useRouter()

	const handleClick = () => {
		console.log('You have placed your order successfully.')
		router.push('/products')
	}

	return (
		<>
			<h1 className='text-7xl'>Hello, World. Home page is here...</h1>
			<Link href='/about'>About</Link>
			<Link href='/profile'>Profile</Link>
			{/* Navigating to a route programatically */}
			<h1>Sumamry of your order</h1>

			<button onClick={handleClick} className='bg-orange-300 text-gray-900 px-4 py-2'>
				Place order
			</button>
		</>
	)
}

export default Home
