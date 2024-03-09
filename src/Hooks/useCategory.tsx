import { useState, useEffect } from "react";
import { mockCategories } from "../Mocks/MockCategory";
import { useCategoryContext } from "../Context/CategoriesContext";
import { useMoviesContext } from "../Context/MoviesContext";

export interface Category {
	id: string;
	image: string;
	title: string;
	description: string;
}

const useCategory = () => {
	const { categories, setCategories } =
		useCategoryContext();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		if (categories.length === 0) {
			const fetchCategories = async () => {
				try {
					const response = await mockCategories();
					setCategories(response);
					setLoading(false);
				} catch (error) {
					setError("Failed to fetch categories");
					setLoading(false);
				}
			};

			fetchCategories();
		}
	}, []);

	const getCategoryById = (
		id: string | undefined
	) => {
		return (
			categories.find(
				(category) => category.id === id
			) || {
				id: "",
				image: "",
				title: "",
				description: ""
			}
		);
	};

	return {
		categories,
		loading,
		error,
		getCategoryById
	};
};

export default useCategory;
