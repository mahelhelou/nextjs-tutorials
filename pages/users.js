// Pre-rendering - Static Site Generation With Data
// Fetching data from an API, and provide it as a props to the page by returning an object of the function
// getStaticProps runs only on the server side, so when we print data in console, we see the result in the Terminal instead of Browser's console.
// You can write server side code directly inside getStaticProps
// Accessing the (fs) modules and quering the database can be written inside getStaticProps
// getStaticProps is allowed ONLY inside a page and NOT inside a regular component.
// getStaticProps returns an object, and the object should return another object that contains the key `props`
// getStaticProps will run on build time.

import User from '../components/User'

const UserList = props => {
	return (
		<div>
			<h1 className='text-4xl'>User List</h1>
			{props.users.map((user, id) => (
				<User key={user.id} user={user} />
			))}
		</div>
	)
}

export default UserList

// We can export a function that holds the props of the page
export async function getStaticProps() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await response.json()
	console.log(data) // You will see this in Terminal NOT Browser!

	// NextJs will receive these props at build time
	return {
		props: {
			users: data
		}
	}
}
