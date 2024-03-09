import React, {
	createContext,
	useState
} from "react";
import { Movie } from "../Hooks/useMovies";

interface MoviesContextProps {
	movies: Movie[];
	setMovies: React.Dispatch<
		React.SetStateAction<Movie[]>
	>;
}

const initialMoviesContext: MoviesContextProps = {
	movies: [],
	setMovies: () => {}
};

const MoviesContext =
	createContext<MoviesContextProps>(
		initialMoviesContext
	);

// Create the MoviesProvider component
const MoviesProvider: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const [movies, setMovies] = useState<Movie[]>(
		[]
	);
	return (
		<MoviesContext.Provider
			value={{ movies, setMovies }}
		>
			{children}
		</MoviesContext.Provider>
	);
};

const useMoviesContext = () => {
	const context = React.useContext(MoviesContext);
	if (context === undefined) {
		throw new Error(
			"useMoviesContext must be used within a moviesContext"
		);
	}
	return context;
};

export {
	useMoviesContext,
	MoviesProvider,
	MoviesContext
};
