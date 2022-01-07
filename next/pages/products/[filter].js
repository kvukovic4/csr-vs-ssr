import { Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import ProductCard from '../../components/card/ProductCard';
import Layout from '../../components/layout/layout';

const Products = ({ productList }) => {
	const router = useRouter();
	const { filter } = router.query;

	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Typography variant="h5">{filter.toUpperCase()}</Typography>
			</Grid>
			{productList.map((product) => (
				<Grid item xs={3} key={product.id}>
					<ProductCard product={product} />
				</Grid>
			))}
			{productList.map((product) => (
				<Grid item xs={3} key={product.id}>
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
	let url = 'https://fakestoreapi.com/products';

	if (filter === 'all-products') {
		url = 'https://fakestoreapi.com/products';
	} else {
		url = `https://fakestoreapi.com/products/category/${filter}`;
	}

	const res = await fetch(url);

	const products = await res.json();
	return {
		props: {
			productList: products,
		},
		revalidate: 60 * 60,
	};
}

export async function getStaticPaths() {
	let categories = ['all-products'];
	const res = await fetch('https://fakestoreapi.com/products/categories');
	const resJson = await res.json();
	categories = [...categories, ...resJson];

	return {
		paths: categories.map((category) => ({
			params: { filter: category },
		})),
		fallback: false,
	};
}
