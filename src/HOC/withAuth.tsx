import React, {
	ComponentType,
	useEffect
} from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../Context/UserContext";

const withAuth = <P extends object>(
	WrappedComponent: ComponentType<P>
) => {
	const WithAuth: React.FC<P> = (props) => {
		const navigate = useNavigate();
		const { isAuthenticated } = useUserContext();

		useEffect(() => {
			if (!isAuthenticated) {
				navigate("/login");
			}
		}, [isAuthenticated, navigate]);

		return <WrappedComponent {...props} />;
	};

	return WithAuth;
};

export default withAuth;
