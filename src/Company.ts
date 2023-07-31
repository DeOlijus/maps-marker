import { faker } from '@faker-js/faker';

export class Company {
  companyName: string;
  companyCatchprase: string;

  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string {
    return `
    <div>
      <h2>CompanyName: ${this.companyName}</h2> 
      <h3>Catchphrase: ${this.companyCatchprase}</h3>
    </div>
    `;
  }

  constructor() {
    this.companyName = faker.company.name();
    this.companyCatchprase = faker.company.catchPhrase();

    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
}
