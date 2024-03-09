import React from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	Avatar
} from "@mui/material";
import { useUserContext } from "../Context/UserContext";

const Header: React.FC = () => {
	const { name } = useUserContext();

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography
					variant="h6"
					component="div"
					sx={{ flexGrow: 1 }}
				>
					{name}
				</Typography>
				<Avatar />
			</Toolbar>
		</AppBar>
	);
};

export default Header;
