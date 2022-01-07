import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DetailsView } from '../../components/details/DetailsView';

const Details = () => {
	let { id } = useParams();

	const [details, setDetails] = useState();
	useEffect(() => {
		async function fetchDetails() {
			const res = await fetch(`https://fakestoreapi.com/products/${id}`);
			const products = await res.json();
			setDetails(products);
		}
		fetchDetails();
	}, [id]);

	return details ? (
		<DetailsView product={details} />
	) : (
		<Box>No data found.</Box>
	);
};

export default Details;
