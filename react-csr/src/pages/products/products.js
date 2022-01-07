import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/card/ProductCard';

const Products = () => {
	let { category } = useParams();
	const [products, setProducts] = useState([]);
	const [products2, setProducts2] = useState([]);
	useEffect(() => {
		async function fetchProducts() {
			let url = '';
			if (!category || category === 'all-products') {
				url = 'https://fakestoreapi.com/products';
			} else {
				url = `https://fakestoreapi.com/products/category/${category}`;
			}
			const res = await fetch(url);
			const products = await res.json();
			setProducts(products);
			const res2 = await fetch('https://fakestoreapi.com/products');
			const products2 = await res2.json();
			setProducts2(products2);
		}
		fetchProducts();
	}, [category]);

	return products ? (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Typography variant="h5">
					{category ? category.toUpperCase() : 'ALL PRODUCTS'}
				</Typography>
			</Grid>
			{products.map((product) => (
				<Grid item xs={3} key={product.id}>
					<ProductCard product={product} />
				</Grid>
			))}
			{products.map((product) => (
				<Grid item xs={3} key={product.id}>
					<ProductCard product={product} />
				</Grid>
			))}
			{products2.map((product) => (
				<Grid item xs={3} key={product.id}>
					<ProductCard product={product} />
				</Grid>
			))}
		</Grid>
	) : (
		<Box>No data found</Box>
	);
};

export default Products;
