import { faker } from '@faker-js/faker';

export class Company {
  companyName: string;
  companyCatchprase: string;

  /* make companyLocation more generic
  companyLocation: {
    lat: number;
    lng: number;
  };
  */
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.name();
    this.companyCatchprase = faker.company.catchPhrase();
    /* make companyLocation more generic
    this.companyLocation = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
    */
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
}
