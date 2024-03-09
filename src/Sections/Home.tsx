import React, { useEffect } from "react";
import withAuth from "../HOC/withAuth";
import Header from "../Layout/Header";
import { Stack, Typography } from "@mui/material";
import useCategory from "../Hooks/useCategory";
import CardCategory from "../Components/CardCategory";
import { useNavigate } from "react-router-dom";
import { useMoviesContext } from "../Context/MoviesContext";

const Home: React.FC = () => {
	const { categories } = useCategory();
	const navigate = useNavigate();
	const { setMovies } = useMoviesContext();

	useEffect(() => {
		setMovies([]);
	});

	return (
		<Stack>
			<Header />
			<Stack sx={{ p: 3 }}>
				<Typography variant="h4">
					Categories
				</Typography>
				<Stack
					sx={{
						flexDirection: "row",
						gap: 2,
						padding: 2
					}}
				>
					{categories.map((category) => (
						<Stack
							key={category.id}
							onClick={() =>
								navigate(
									`/categories/${category.id}`
								)
							}
							sx={{ width: "20%" }}
						>
							<CardCategory category={category} />
						</Stack>
					))}
				</Stack>
			</Stack>
		</Stack>
	);
};

export default withAuth(Home);
