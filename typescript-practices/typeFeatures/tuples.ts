const drink = {
  color: "brown",
  carbonated: true,
  sugar: 3,
};

//tuple is using for kipping type order in the array

type Drink = [string, boolean, number]; // using type alias
const coca: Drink = ['red', false, 80];
// const pepsi: [string, boolean, number] = ['red', true, 40];
// pepsi[0] = 50;// !!!!!!!!!we don't want do like this, order is important
// coca[0] = true; // !!!!!!!!!can't do like this