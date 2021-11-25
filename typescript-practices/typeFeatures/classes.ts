class Vehicle {
  public name(): void {
    console.log("mini copper)))");
  }

  private drive(): void {
    console.log("janaparh");
  }

  protected beep(): void {
    console.log("piiib");
    this.drive();
  }
}

class Car extends Vehicle {
  // drive(): void {
  //   console.log("hi drivers!!!!!!!!!!!!!");
  // }

  beep(): void {
    console.log("paaab))))");
  }
}

const car = new Car();
car.beep();
// car.drive();

//---------- working with properties -------------
class NewCar {
  // color: string = 'green';
  // constructor(color: string) {
  //     this.color = color;
  // }

  constructor(public color: string) {} // also can be private and protected -> mean all 3 modifiers can work here
}
const myCar = new NewCar("olive");
console.log(myCar.color);

class MyOldCar extends NewCar {
  constructor(public name: string, color: string) {
    super(color);
  }
}

const oldCar = new MyOldCar("Anush", "olive");
console.log(oldCar.color);
