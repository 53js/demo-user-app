import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Layout } from './components/Layout';
import { Screen404 } from './screen/404';
import { ScreenHome } from './screen/Home';
import { ScreenUsers } from './screen/Users';

import './App.scss';

function App() {
	return (
		<div className="App d-flex flex-column align-items-start justify-content-start">
			<Container>
				<BrowserRouter>
					<Layout />
					<Routes>
						<Route index element={<ScreenHome />} />
						<Route path="/users" element={<ScreenUsers />} />
						<Route path="*" element={<Screen404 />} />
					</Routes>
				</BrowserRouter>
			</Container>
		</div>
	);
}

export default App;
