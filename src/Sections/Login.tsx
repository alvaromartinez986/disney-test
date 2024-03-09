import React, { useState } from "react";
import {
	TextField,
	Button,
	Stack,
	Typography,
	CircularProgress
} from "@mui/material";
import useUserAuth from "../Hooks/useUserAuth";

const Login: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const { login, loading } = useUserAuth();

	const handleEmailChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setPassword(event.target.value);
	};

	const handleSubmit = (
		event: React.FormEvent<HTMLFormElement>
	) => {
		event.preventDefault();

		if (!email || !password) {
			setError("Please fill in all fields");
		} else if (!validateEmail(email)) {
			setError("Please enter a valid email");
		} else {
			login(email, password);
		}
	};

	const validateEmail = (email: string) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
			email
		);
	};

	return (
		<Stack
			sx={{
				width: "30%",
				height: "50%",
				margin: "auto",
				marginTop: "10%",
				border: "1px solid #000",
				padding: "20px",
				borderRadius: "10px"
			}}
		>
			<form onSubmit={handleSubmit}>
				<Typography variant="h4" align="center">
					Login Disney APP
				</Typography>
				<Stack
					sx={{
						justifyContent: "center",
						alignItems: "center",
						alignContent: "center",
						padding: "20px"
					}}
					spacing={2}
				>
					<TextField
						label="Email"
						type="email"
						value={email}
						onChange={handleEmailChange}
						error={!!error}
						helperText={error}
						fullWidth
						required
					/>
					<TextField
						label="Password"
						type="password"
						value={password}
						onChange={handlePasswordChange}
						fullWidth
						required
					/>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						disabled={loading}
					>
						{loading ? (
							<CircularProgress />
						) : (
							"Login"
						)}
					</Button>
				</Stack>
			</form>
		</Stack>
	);
};

export default Login;
