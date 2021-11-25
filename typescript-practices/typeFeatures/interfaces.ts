interface Vehicle {
  name: string[]; //can be object type
  year: number; //primitive type
  broken: boolean;
  summery(): string; // can have method
}

//reusable interface for more object methods with same name
interface Reportable {
  summery(): string;
}

const oldVehicle = {
  name: ["miniCopper", "volvo"],
  year: 1986,
  broken: true,
  summery(): string {
    return `Name: ${this.name[0]}`;
  },
};

const drink = {
  color: "brown",
  carbonate: true,
  sugar: 40,

  summery(): string {
    return `My drink has ${this.sugar} gram of sugar!!!`;
  },
};

//!!!!!!!!! without interface !!!!!!!!!!!
// const printVehicle = function (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void {
//   console.log(
//     `Name: ${vehicle.name}\n Year: ${vehicle.year}\n Is broken: ${vehicle.broken}`
//   );
// };
// printVehicle(oldVehicle);

//********** Functions Using Interface ************
const printVehicle = function (vehicle: Vehicle) {
  console.log(
    `Name: ${vehicle.name}\n Year: ${vehicle.year}\n Is broken: ${vehicle.broken}`
  );
};
printVehicle(oldVehicle);

const printSummery = function (item: Reportable): void {
  console.log(item.summery());
};

printSummery(oldVehicle);
printSummery(drink);
