const User = props => {
	return (
		<h3 className='text-2xl'>
			Name: {props.user.name} ~ Email: {props.user.email}
		</h3>
	)
}

export default User
