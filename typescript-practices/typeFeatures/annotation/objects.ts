const person = {
  firstName: "Anush",
  lastName: "Markosyan",
  age: 34,
  coords: {
    lat: 23,
    lng: 34,
  },
  getAge(age: number): void {
    this.age = age;
  },
};

//const { firstName, lastName } = person;
const { firstName, lastName }: { firstName: string; lastName: string } = person;

// const {
//   coords: { lat, lng },
// } = person;
// console.log(lng, lat);

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = person;
