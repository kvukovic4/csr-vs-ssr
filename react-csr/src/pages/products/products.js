import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/card/ProductCard';
import { v4 as uuidv4 } from 'uuid';

const Products = () => {
	let { category } = useParams();
	const [products, setProducts] = useState([]);
	useEffect(() => {
		async function fetchProducts() {
			let url = '';
			if (!category || category === 'all-products') {
				url = 'https://nike-products.p.rapidapi.com/shoes';
			} else {
				url = `https://nike-products.p.rapidapi.com/shoes/${category}`;
			}
			const res = await fetch(url, {
				headers: {
					'x-rapidapi-host': 'nike-products.p.rapidapi.com',
					'x-rapidapi-key':
						'eb46880fd2msh7178573f9378debp148336jsned30b68c2691',
				},
			});
			const products = await res.json();
			setProducts(products);
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
				<Grid item xs={3} key={uuidv4()}>
					<ProductCard product={product} />
				</Grid>
			))}
		</Grid>
	) : (
		<Box>No data found.</Box>
	);
};

export default Products;
