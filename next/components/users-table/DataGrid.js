import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
	{ field: 'id', headerName: 'ID', width: 90 },
	{
		field: 'id',
		headerName: 'ID',
		width: 50,
	},
	{
		field: 'email',
		headerName: 'Email',
		width: 200,
	},
	{
		field: 'name',
		headerName: 'Name',
		width: 200,
	},
	{
		field: 'address',
		headerName: 'Address',
		width: 200,
	},
	{
		field: 'username',
		headerName: 'Username',
		width: 200,
	},
	{
		field: 'phone',
		headerName: 'Phone',
		width: 200,
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
		<div style={{ height: 400, width: '100%' }}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[5]}
				disableSelectionOnClick
				isRowSelectable={false}
				disableColumnSelector
			/>
		</div>
	);
}
