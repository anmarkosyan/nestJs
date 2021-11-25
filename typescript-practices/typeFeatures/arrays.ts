const array1 = [23, 45, 5, 6, 7];
const array2 = ['a', 'b', 'v'];

//case for type annotation
const array3 = []; // any[]
const array4: string[] = []; // string[]
const nestedArray: string[][] = [];

//flexible types
const mixedTypesArray: (string | Date | number)[] = ['werwer', new Date()];
mixedTypesArray.push('alabalanica');
mixedTypesArray.push(89089);//if not assign type number can have type error


