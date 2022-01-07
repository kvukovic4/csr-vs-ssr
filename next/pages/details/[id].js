import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { DetailsView } from '../../components/details/DetailsView';
import Layout from '../../components/layout/layout';

const Details = ({ productDetails }) => {
	console.log(productDetails);

	return (
		<div>
			<style global jsx>{`
				html,
				body,
				body > div:first-child,
				div#__next,
				div#__next > div {
					height: 100%;
				}
			`}</style>
			<DetailsView product={productDetails} />
		</div>
	);
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
