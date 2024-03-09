import {
	Card,
	CardContent,
	Typography,
	CardMedia
} from "@mui/material";
import { Category } from "../Hooks/useCategory";

const CardCategory = ({
	category
}: {
	category: Category;
}) => {
	return (
		<Card key={category.id}>
			<CardMedia
				sx={{ height: 140 }}
				image={category.image}
				title={category.title}
			/>
			<CardContent>
				<Typography variant="h5">
					{category.title}
				</Typography>
				<Typography variant="body1">
					{category.description}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default CardCategory;
