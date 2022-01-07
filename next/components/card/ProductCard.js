import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const styles = {
	image: {
		height: 200,
		width: '100%',
		objectFit: 'contain',
	},
	title: {
		display: '-webkit-box',
		WebkitLineClamp: 2,
		WebkitBoxOrient: 'vertical',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
	},
};

export default function ProductCard({ product }) {
	return (
		<Card sx={{ height: '350px' }}>
			<CardMedia
				component="img"
				image={product.image}
				alt={product.title}
				style={styles.image}
			/>
			<CardContent>
				<Typography
					gutterBottom
					variant="h6"
					component="div"
					style={styles.title}
				>
					{product.title}
				</Typography>
				<Typography>{product.price}</Typography>
				{/* <Typography variant="body2" color="text.secondary">
					{product.description}
				</Typography> */}
			</CardContent>
			<CardActions>
				<Button size="small">Share</Button>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	);
}
