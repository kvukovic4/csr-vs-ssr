import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
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
				history(`/details/${product.id}`);
			}}
		>
			<CardMedia
				component="img"
				image={product.image}
				alt={product.title}
				style={styles.image}
			/>
			<CardContent>
				<Typography gutterBottom component="div" style={styles.title}>
					{product.title}
				</Typography>
				<Box display="flex" justifyContent="space-between">
					<Box display="flex" justifyContent="flex-end">
						<Typography>{product.rating.rate}</Typography>
						<StarIcon />
					</Box>
					<Box display="flex" justifyContent="flex-end">
						<Typography>${product.price}</Typography>
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
}
