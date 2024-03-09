import React, {
	createContext,
	useState
} from "react";
import { Category } from "../Hooks/useCategory";

interface CategoriesContextType {
	categories: Category[];
	setCategories: React.Dispatch<
		React.SetStateAction<Category[]>
	>;
}

const initialCategories: Category[] = [];

const CategoriesContext =
	createContext<CategoriesContextType>({
		categories: initialCategories,
		setCategories: () => {}
	});

const CategoriesProvider: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const [categories, setCategories] = useState<
		Category[]
	>(initialCategories);

	return (
		<CategoriesContext.Provider
			value={{ categories, setCategories }}
		>
			{children}
		</CategoriesContext.Provider>
	);
};

const useCategoryContext = () => {
	const context = React.useContext(
		CategoriesContext
	);
	if (context === undefined) {
		throw new Error(
			"useCategoryContext must be used within a categoryContext"
		);
	}
	return context;
};

export {
	useCategoryContext,
	CategoriesProvider,
	CategoriesContext
};
