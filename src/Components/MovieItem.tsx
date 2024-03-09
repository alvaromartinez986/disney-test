import React from "react";
import { Stack, Typography } from "@mui/material";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { Movie } from "../Hooks/useMovies";

interface MovieItemProps {
	movie: Movie;
}

const MovieItem: React.FC<MovieItemProps> = ({
	movie
}) => {
	return (
		<Stack
			sx={{
				flexDirection: "row",
				justifyContent: "space-between",
				width: "30%",
				gap: 4,
				border: "1px solid #000",
				borderRadius: "10px"
			}}
		>
			<Typography variant="h5" component="div">
				{movie.title}
			</Typography>
			<Typography
				variant="subtitle1"
				color="text.secondary"
			>
				Release Year: {movie.releaseYear}
			</Typography>
			<LocalMoviesIcon />
		</Stack>
	);
};

export default MovieItem;
