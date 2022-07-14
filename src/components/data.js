import { faker } from "@faker-js/faker";

function data(size, type) {
    const document = () => {
        if (type === "trend") {
            return {
                name: faker.commerce.productName(),
                image: faker.image.abstract(150, 200, true),
                description: faker.commerce.productDescription(),
                type: faker.commerce.department(),
            };
        } else if (type === "suggest") {
            return {
                name: faker.commerce.productName(),
            };
        } else {
            return "";
        }
    };
    return Array.from({ length: size }, document);
}

export default data;
