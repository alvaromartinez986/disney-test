import { createBrowserRouter } from "react-router-dom";
import Login from "./Sections/Login";
import NotFound from "./Sections/NotFound";
import Home from "./Sections/Home";
import ContentCategory from "./Sections/ContentCategory";
import ContentDetails from "./Sections/ContentDetails";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <NotFound />
	},
	{
		path: "/login",
		element: <Login />
	},
	{
		path: "/categories/:id",
		element: <ContentCategory />
	},
	{
		path: "/movies/:id",
		element: <ContentDetails />
	}
]);
