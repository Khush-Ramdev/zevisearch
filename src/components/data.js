import { faker } from "@faker-js/faker";

function data(size, type, resultytpe) {
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
        } else if (type === "searchresults") {
            return {
                name: faker.commerce.productName(),
                image: faker.image.abstract(200, 250, true),
                rating: faker.datatype.number({ min: 1, max: 5 }),
                price: faker.datatype.number({ min: 50, max: 5000 }),
                reviews: faker.datatype.number({ min: 1, max: 500 }),
                department: faker.commerce.department(),
                type: resultytpe,
            };
        } else {
            return "";
        }
    };
    return Array.from({ length: size }, document);
}

export default data;
