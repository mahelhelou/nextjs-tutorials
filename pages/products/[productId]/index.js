import { useRouter } from 'next/router'

const SingleProduct = () => {
	const router = useRouter()
	const { productId } = router.query

	return <div>Details about {productId}</div>
}

export default SingleProduct
