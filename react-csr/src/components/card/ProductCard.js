import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const styles = {
	image: {
		height: 200,
		width: '100%',
		objectFit: 'contain',
	},
	title: {
		fontSize: '14px',
		fontWeight: 'bold',
		marginBottom: '15px',
		display: '-webkit-box',
		WebkitLineClamp: 2,
		WebkitBoxOrient: 'vertical',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
	},
};

export default function ProductCard({ product }) {
	let history = useNavigate();
	return (
		<Card
			sx={{ height: '330px', paddingTop: '15px' }}
			onClick={() => {
				history(product.url);
			}}
		>
			<CardMedia
				component="img"
				image={product.img}
				alt={product.title}
				style={styles.image}
			/>
			<CardContent>
				<Typography gutterBottom component="div" style={styles.title}>
					{product.title}
				</Typography>
				<Box display="flex" justifyContent="flex-start">
					<Typography gutterBottom variant="h5">
						{product.price}
					</Typography>
				</Box>
			</CardContent>
		</Card>
	);
}
