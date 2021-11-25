import * as faker from "faker";

export class User {
  name: string;
  location: {
    lat: number;
    lng: number
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  contentMarker(): string{
    return `<div>
        <h2>${this.name}</h2>
    </div>
    `;

  }
}
