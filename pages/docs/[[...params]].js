// Catch all routes. It's like building a documentation in Documentation project
// /docs
// /docs/feature1
// // docs/feature1/concept1
// // docs/feature1/concept1/example1

// Can be used for Real Estate projects ~ Give me a houses from /100000/1000000 ~ /min/max

import { useRouter } from 'next/router'

const Docs = () => {
	const router = useRouter()
	const { params = [] } = router.query
	console.log(params)

	if (params.length === 2) {
		return (
			<h1 className='text-7xl'>
				Doc for {params[0]} - Concept of {params[1]}
			</h1>
		)
	} else if (params.length === 1) {
		return <h1 className='text-7xl'>Doc for the feature1 {params[0]}</h1>
	}

	return <h1 className='text-7x'>Docs home page ~ TOC</h1>
}

export default Docs
