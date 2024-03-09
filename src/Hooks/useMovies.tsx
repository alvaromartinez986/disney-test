import { useState, useEffect } from "react";
import { fetchMockMovies } from "../Mocks/MockMovies";
import { useMoviesContext } from "../Context/MoviesContext";

export interface Movie {
	id: string;
	title: string;
	releaseYear: number;
	description: string;
}

const useMovies = () => {
	const { movies, setMovies } =
		useMoviesContext();
	const [loading, setLoading] =
		useState<boolean>(true);

	useEffect(() => {
		if (movies.length === 0) {
			const fetchMovies = async () => {
				try {
					const response =
						await fetchMockMovies();
					setMovies(response);
					setLoading(false);
				} catch (error) {
					console.error(
						"Error fetching movies:",
						error
					);
				}
			};

			fetchMovies();
		}
	}, []);

	const getMovieById = (
		id: string | undefined
	) => {
		return (
			movies.find((movie) => movie.id === id) || {
				id: "",
				title: "",
				releaseYear: 0,
				description: ""
			}
		);
	};

	return { movies, loading, getMovieById };
};

export default useMovies;
