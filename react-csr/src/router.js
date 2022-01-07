import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/products/products';
// import your route components too

render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route path="products" element={<Products />}>
					<Route path="all-products" element={<Products />} />
				</Route>
				<Route path="users" element={<NewTeamForm />} />
			</Route>
		</Routes>
	</BrowserRouter>,
	document.getElementById('root')
);
