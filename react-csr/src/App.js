import "./App.css";
import Layout from "./components/layout/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/products/products";
import history from "./history";

function App() {
	return (
		<BrowserRouter history={history}>
			<Layout>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="products" element={<Products />}>
						<Route path=":category" element={<Products />} />
					</Route>
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
