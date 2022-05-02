import React, { useState } from 'react';
import './style.css';

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" className='input' name="name" value={user.name} onChange={handleInputChange} />
			<label>Username</label>
			<input type="text" className='input' name="username" value={user.username} onChange={handleInputChange} />
			<button className='btn btn-primary'>Add new user</button>
		</form>
	)
}

export default AddUserForm
