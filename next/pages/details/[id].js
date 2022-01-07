import { DetailsView } from '../../components/details/DetailsView';
import Layout from '../../components/layout/layout';

const Details = ({ productDetails }) => {
	return <DetailsView product={productDetails} />;
};

Details.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};

export default Details;

export async function getServerSideProps({ params }) {
	const id = params.id;

	const res = await fetch(`https://fakestoreapi.com/products/${id}`);

	const products = await res.json();
	return {
		props: {
			productDetails: products,
		},
	};
}
