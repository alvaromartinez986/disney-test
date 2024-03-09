import { RouterProvider } from "react-router-dom";
import { router } from "./App.routes";
import { UserProvider } from "./Context/UserContext";
import { CategoriesProvider } from "./Context/CategoriesContext";
import { MoviesProvider } from "./Context/MoviesContext";

function App() {
	return (
		<UserProvider>
			<CategoriesProvider>
				<MoviesProvider>
					<RouterProvider router={router} />
				</MoviesProvider>
			</CategoriesProvider>
		</UserProvider>
	);
}

export default App;
