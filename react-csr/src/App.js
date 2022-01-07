import './App.css';
import Layout from './components/layout/layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/products/products';
import Users from './pages/users';
import history from './history';
import Details from './pages/details/details';

function App() {
	return (
		<BrowserRouter history={history}>
			<Layout>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="products" element={<Products />}>
						<Route path=":category" element={<Products />} />
					</Route>
					<Route path="details/:id" element={<Details />} />
					<Route path="users" element={<Users />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
