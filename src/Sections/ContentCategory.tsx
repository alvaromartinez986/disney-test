import React from "react";
import Header from "../Layout/Header";
import CardCategory from "../Components/CardCategory";
import {
	useNavigate,
	useParams
} from "react-router-dom";
import useCategory from "../Hooks/useCategory";
import { Stack, Typography } from "@mui/material";
import useMovies, {
	Movie
} from "../Hooks/useMovies";
import MovieItem from "../Components/MovieItem";

const ContentCategory: React.FC = () => {
	const { id } = useParams();
	const { getCategoryById } = useCategory();
	const selectedCategory = getCategoryById(id);
	const { movies } = useMovies();
	const navigate = useNavigate();

	return (
		<Stack>
			<Header />
			<Stack sx={{ p: 3, width: "30%" }}>
				<CardCategory
					category={selectedCategory}
				/>
			</Stack>
			<Stack sx={{ p: 3, gap: 2 }}>
				<Typography variant="h4">
					Movies
				</Typography>
				{movies.map((movie: Movie) => (
					<Stack
						key={movie.id}
						onClick={() =>
							navigate(`/movies/${movie.id}`)
						}
					>
						<MovieItem movie={movie} />
					</Stack>
				))}
			</Stack>
		</Stack>
	);
};

export default ContentCategory;
