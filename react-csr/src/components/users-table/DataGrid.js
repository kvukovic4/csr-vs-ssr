import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
	{
		field: 'id',
		headerName: 'ID',
		flex: 100,
		minWidth: 50,
	},
	{
		field: 'email',
		headerName: 'Email',
		flex: 200,
		minWidth: 200,
	},
	{
		field: 'name',
		headerName: 'Name',
		flex: 200,
		minWidth: 200,
	},
	{
		field: 'address',
		headerName: 'Address',
		flex: 250,
		minWidth: 200,
	},
	{
		field: 'username',
		headerName: 'Username',
		flex: 200,
		minWidth: 200,
	},
	{
		field: 'phone',
		headerName: 'Phone',
		flex: 200,
		minWidth: 200,
	},
];

export default function UsersList({ usersList }) {
	let rows = [];
	rows = usersList.map((user) => {
		return {
			id: user.id,
			email: user.email,
			name: user.name.firstname + ' ' + user.name.lastname,
			address:
				user.address.street +
				' ' +
				user.address.number +
				', ' +
				user.address.city,
			username: user.username,
			phone: user.phone,
		};
	});
	return (
		<div style={{ height: '400px', width: '100%' }}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[5]}
				disableSelectionOnClick
				disableColumnSelector
			/>
		</div>
	);
}
