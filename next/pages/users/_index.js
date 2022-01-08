import { Typography } from '@mui/material';
import Layout from '../../components/layout/layout';
import UsersList from '../../components/users-table/DataGrid';

const Users = ({ usersList }) => {
	return (
		<>
			<Typography variant="h5" marginBottom="15px">
				USERS
			</Typography>
			<UsersList usersList={usersList} />
		</>
	);
};

Users.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};

export default Users;

export async function getServerSideProps() {
	const res = await fetch('https://fakestoreapi.com/users');

	const users = await res.json();
	return {
		props: {
			usersList: users,
		},
	};
}
