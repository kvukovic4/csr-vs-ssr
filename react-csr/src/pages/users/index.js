import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import UsersList from '../../components/users-table/DataGrid';

const Users = () => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		async function fetchUsers() {
			const res = await fetch(`https://fakestoreapi.com/users`);
			const users = await res.json();
			setUsers(users);
		}
		fetchUsers();
	}, []);

	return users ? (
		<>
			<Typography variant="h5" marginBottom="15px">
				USERS
			</Typography>
			<UsersList usersList={users} />
		</>
	) : (
		<Box>No users found.</Box>
	);
};

export default Users;
