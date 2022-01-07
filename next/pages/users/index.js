import Layout from '../../components/layout/layout';
import UsersList from '../../components/users-table/DataGrid';

const Users = ({ usersList }) => {
	return <UsersList usersList={usersList} />;
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
