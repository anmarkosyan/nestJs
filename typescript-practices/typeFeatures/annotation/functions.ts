const addFunction = (a: number, b: number): number => {
  return a + b;
};
addFunction(23, 4);

// in this case we uses type inference and  the function have number type which it take from body,
// but we should use type TYPE ANNOTATION for prevent wrong function output!!!!
const subtract = (a: number, b: number) => {
  return a - b;
};
subtract(23, 12);

// using void and never types

const loggerHere = (message: string): void => {
    console.log(message);
    // return null;
   // return undefined;
}
const neverOutput = (message: string): never => {
    throw new Error(message);
}

//using objects for type annotation => template literal
const person = {
    name: 'Anush',
    age: 34,
    address: 'Canada'
};

interface Person {

}


const aboutMe = function({name, age, address}: {name: string, age: number, address: string}): void {
    //console.log(person.name, person.age, person.address);
    console.log(name, age, address); //using destructuring
};
aboutMe(person);
