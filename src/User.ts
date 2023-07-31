import { faker } from '@faker-js/faker';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string {
    return `
      <div>
        <h2>UserName: ${this.name}</h2> 
      </div>
      `;
  }

  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
}
