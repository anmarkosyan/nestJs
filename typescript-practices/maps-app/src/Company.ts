import * as faker from "faker";

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  contentMarker(): string {
    return `<div>
        <h2>${this.companyName}</h2>
        <h3>${this.catchPhrase}</h3>
        </div>
    `;
  }
}
