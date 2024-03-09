import { faker } from "@faker-js/faker";
import { Movie } from "../Hooks/useMovies";

export function fetchMockMovies(): Promise<
	Movie[]
> {
	return new Promise((resolve) => {
		setTimeout(() => {
			const movies: Movie[] = [];

			for (
				let i = 0;
				i < faker.number.int({ min: 1, max: 10 });
				i++
			) {
				movies.push({
					id: faker.string.uuid(),
					title: faker.lorem.word(),
					releaseYear: faker.number.int({
						min: 1990,
						max: 2024
					}),
					description: faker.lorem.paragraph({
						min: 1,
						max: 3
					})
				});
			}
			resolve(movies);
		}, 1000);
	});
}
