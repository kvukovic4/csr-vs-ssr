import Layout from '../../components/layout/layout';

const Details = () => {
	return <div>details</div>;
};

Details.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};

export default Details;
