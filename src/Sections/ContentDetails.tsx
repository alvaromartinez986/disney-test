import React from "react";
import { Stack, Typography } from "@mui/material";
import useMovies from "../Hooks/useMovies";
import { useParams } from "react-router-dom";
import Header from "../Layout/Header";

const ContentDetails: React.FC = () => {
	const { id } = useParams();
	const { getMovieById } = useMovies();
	const movie = getMovieById(id);

	return (
		<Stack>
			<Header />
			<Stack sx={{ p: 5 }}>
				<Stack
					sx={{ flexDirection: "row", gap: 2 }}
				>
					<Typography variant="h4">
						{movie.title}
					</Typography>
					<Typography variant="subtitle1">
						Release Year: {movie.releaseYear}
					</Typography>
				</Stack>
				<Typography variant="body1">
					{movie.description}
				</Typography>
			</Stack>
		</Stack>
	);
};

export default ContentDetails;
