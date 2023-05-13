import { faker } from "@faker-js/faker";

export const generateFakePerson = (properties) => {
  const person = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
    age: faker.number.int({ min: 18, max: 100 }),
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country(),
    },
  };

  const filteredPerson = properties?.split(",").reduce((filtered, property) => {
    if (person.hasOwnProperty(property)) {
      filtered[property] = person[property];
    }
    return filtered;
  }, {});

  return filteredPerson;
};
