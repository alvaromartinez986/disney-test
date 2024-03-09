import { faker } from "@faker-js/faker";

export function mockLogin(): Promise<{
	name: string;
	email: string;
}> {
	return new Promise((resolve) => {
		setTimeout(() => {
			const mockUser = {
				name:
					faker.person.firstName() +
					" " +
					faker.person.lastName(),
				email: "johndoe@example.com"
			};
			resolve(mockUser);
		}, 2000);
	});
}
