import { Grid } from '@mui/material';
import ProductCard from '../../components/card/ProductCard';
import Layout from '../../components/layout/layout';

const Products = ({ productList, categories }) => {
	console.log(productList);
	return (
		<Grid container spacing={2}>
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

export async function getServerSideProps() {
	const res = await fetch('https://fakestoreapi.com/products');
	const resCat = await fetch('https://fakestoreapi.com/products/categories');

	const products = await res.json();
	const categories = await resCat.json();
	return {
		props: {
			productList: products,
			categories: categories,
		},
	};
}
