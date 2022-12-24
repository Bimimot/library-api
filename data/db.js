const { faker } = require("@faker-js/faker");

const books = [];

function createRandomBook() {
  return {
    author: faker.name.fullName(),
    title: faker.company.catchPhrase(),
    description: faker.lorem.paragraph(),
    image: faker.image.image(400, 620),
  };
}

Array.from({ length: 10 }).forEach(() => {
  books.push(createRandomBook());
});

module.exports = { books };
