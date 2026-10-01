// console.log('Hello world');

// const x = 1;
// let y = 5;

// console.log(x, y); // 1 5 are printed
// y += 10;
// console.log(x, y); // 1 15 are printed
// y = 'sometext';
// console.log(x, y); // 1 sometext are printed
// x = 4; // causes an error

// const t = [1, -1, 3];
// t.push(5);

// console.log(t.length); // 4 is printed
// console.log(t[1]); // -1 is printed

// t.forEach(value => {
//     console.log(value * 5); // numbers in the array are printed multiplied by 5, each on its own line
// });

// // in React, a better practice is to use concat, because it creates a new array and leaves the original unchanged

// const t2 = t.concat(35); // creates a new array

// console.log(t)
// console.log(t2)

// map method
// const t = [1, 2, 3];

// const m1 = t.map(value => value * 2)
// console.log(t);
// console.log(m1);

// // based on the old array, map creates a new array, for which the function given as a parameter is used to create the items inside this new array
// // map can also transforn the array into something completely different
// const m2 = t.map(value => '<li>' + value + '</li>')
// console.log(m2) // prints each value inside a li html tag

// destructuring assignment
// const t = [1, 2, 3, 4, 5];
// const [first, second, ...rest] = t;
// console.log(first, second); // 1 2 is printed
// console.log(rest) // [3, 4, 5] is printed

// objects
// const object1 = {
//     name: 'Arto Hellas',
//     age: 35,
//     education: 'PhD',
// }

// const object2 = {
//     name: 'Full Stack web application development',
//     level: 'intermediate studies',
//     size: 5,
// }

// const object3 = {
//     name: {
//         first: 'Dan',
//         last: 'Abramov',
//     },
//         grades: [2, 3, 5, 3],
//         department: 'Stanford University',
// }

// console.log(object1.name) // Arto Hellas is printed
// const fieldName = 'age';
// console.log(object1[fieldName]) // 35 is printed
// object1.address = 'Helsinki';
// object1['secret number'] = 12341;

// functions
// const sum = (p1, p2) => {
//     console.log(p1);
//     console.log(p2);
//     return p1 + p2;
// }

// const result = sum(1, 5);
// console.log(result);

// with just a single parameter, we can exclude the paranthesis
// const square = p => {
//     console.log(p);
//     return p * p;
// }
// console.log(square(7));

// if the function only contains a single expression, then the braces are not needed and the function returns the result of its only expression
// const square = p => p * p;
// console.log(square(9));

// this form is particularly handy when manipulatin arrays, like using the map method
// const t = [1, 2, 3];
// const tSquared = t.map(p => p * p);
// console.log(tSquared);

