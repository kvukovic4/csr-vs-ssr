import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const DetailsView = ({ product }) => {
	return (
		<Grid
			container
			justifyContent="center"
			alignItems="center"
			spacing={3}
			paddingTop="20px"
		>
			<Grid item xs={5} justifyContent="center" alignItems="center">
				<img src={product.image} alt={product.title} width="400px" />
			</Grid>
			<Grid item xs={7} container spacing={2}>
				<Box display="flex" flexDirection="column" alignItems="flex-start">
					<Typography variant="button" marginBottom="10px">
						{product.category.toUpperCase()}
					</Typography>
					<Typography variant="h4" marginBottom="35px">
						{product.title}
					</Typography>
					<Typography variant="body1" marginBottom="35px">
						{product.description}
					</Typography>
					<Typography variant="h4">${product.price}</Typography>
				</Box>
			</Grid>
		</Grid>
	);
};
