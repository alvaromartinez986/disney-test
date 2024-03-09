import React, {
	createContext,
	useState
} from "react";

interface UserContextProps {
	email: string | null;
	isAuthenticated: boolean;
	name: string | null;
	setEmail: (email: string | null) => void;
	setAuthenticated: (
		isAuthenticated: boolean
	) => void;
	setName: (name: string | null) => void;
}

const initialUserContext: UserContextProps = {
	email: null,
	isAuthenticated: false,
	name: null,
	setEmail: () => {},
	setAuthenticated: () => {},
	setName: () => {}
};

const UserContext =
	createContext<UserContextProps>(
		initialUserContext
	);

const UserProvider: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const [email, setEmail] = useState<
		string | null
	>(null);
	const [isAuthenticated, setAuthenticated] =
		useState<boolean>(false);
	const [name, setName] = useState<string | null>(
		null
	);

	return (
		<UserContext.Provider
			value={{
				email,
				isAuthenticated,
				name,
				setEmail,
				setAuthenticated,
				setName
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

const useUserContext = () => {
	const context = React.useContext(UserContext);
	if (context === undefined) {
		throw new Error(
			"useUserContext must be used within a userContext"
		);
	}
	return context;
};

export {
	UserProvider,
	useUserContext,
	UserContext
};
