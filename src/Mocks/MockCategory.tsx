import { faker } from "@faker-js/faker";
import { Category } from "../Hooks/useCategory";

export function mockCategories(): Promise<
	Category[]
> {
	return new Promise((resolve) => {
		setTimeout(() => {
			const categories: Category[] = [];
			for (let i = 0; i < 5; i++) {
				categories.push({
					id: faker.string.uuid(),
					image: faker.image.url(),
					title: faker.lorem.word(),
					description: faker.lorem.paragraph({
						min: 1,
						max: 3
					})
				});
			}
			resolve(categories);
		}, 1000);
	});
}
