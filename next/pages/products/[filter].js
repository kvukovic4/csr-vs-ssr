import { Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import ProductCard from '../../components/card/ProductCard';
import Layout from '../../components/layout/layout';
import { v4 as uuidv4 } from 'uuid';

const Products = ({ productList }) => {
	const router = useRouter();
	const { filter } = router.query;

	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Typography variant="h5">{filter.toUpperCase()}</Typography>
			</Grid>
			{productList.map((product) => (
				<Grid item xs={3} key={uuidv4()}>
					<ProductCard product={product} />
				</Grid>
			))}
		</Grid>
	);
};

export default Products;

Products.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};

export async function getStaticProps({ params: { filter } }) {
	let url = 'https://nike-products.p.rapidapi.com/shoes';

	if (filter === 'all-products') {
		url = 'https://nike-products.p.rapidapi.com/shoes';
	} else {
		url = `https://nike-products.p.rapidapi.com/shoes/${filter}`;
	}

	const res = await fetch(url, {
		headers: {
			'x-rapidapi-host': 'nike-products.p.rapidapi.com',
			'x-rapidapi-key': 'eb46880fd2msh7178573f9378debp148336jsned30b68c2691',
		},
	});

	const products = await res.json();
	return {
		props: {
			productList: products,
		},
		revalidate: 86400,
	};
}

export async function getStaticPaths() {
	let categories = ['all-products', 'men-shoes', 'women-shoes', 'kids-shoes'];

	return {
		paths: categories.map((category) => ({
			params: { filter: category },
		})),
		fallback: false,
	};
}
