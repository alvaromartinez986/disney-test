import { Stack, Typography } from "@mui/material";
import React from "react";

const NotFound: React.FC = () => {
	return (
		<Stack>
			<Typography variant="h4">
				404 - Page Not Found
			</Typography>
			<Typography variant="body1" component="div">
				The page you are looking for does not
				exist.
			</Typography>
		</Stack>
	);
};

export default NotFound;
