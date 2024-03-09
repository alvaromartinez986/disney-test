import { useState } from "react";
import { useUserContext } from "../Context/UserContext";
import { mockLogin } from "../Mocks/MockUser";
import { useNavigate } from "react-router-dom";

const useUserAuth = () => {
	const [loading, setLoading] = useState(false);
	const { setEmail, setAuthenticated, setName } =
		useUserContext();
	const navigate = useNavigate();

	const login = async (
		email: string,
		password: string
	) => {
		try {
			setLoading(true);
			const response = await mockLogin();

			setEmail(email);
			setName(response.name);
			setAuthenticated(true);
			navigate("/");
		} catch (error) {
			console.error("Login failed:", error);
		} finally {
			setLoading(false);
		}
	};

	return { loading, login };
};

export default useUserAuth;
