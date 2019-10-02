// Destructuring
// uncomment the lines below to check the result

// ----------------------------------
// 1. Destructuring basic example
// const basicExample = [1, 2, 3];

// 👴🏻 Old style
// const first = basicExample[0];
// console.log(first);

// 👶 Es6 style
// const [first] = basicExample;
// console.log(first);
// const [first, second, third] = basicExample;
// console.log(first, second, third);

// ----------------------------------
// 2. Where can we use destructuring?

// Variable declarations
// const [a] = ["x"];
// console.log(a);
// let [b] = ["y"];
// console.log(b);
// var [c] = ["z"];
// console.log(c);

// Assignments
// let b;
// [b] = ["z"];
// console.log(b);

// Parameter definitions
// Note: we can use this in react components too
// const foo = ([x]) => x;
// console.log(foo(["peanut"]));

// ----------------------------------
// 3. 💥 Array destructuring

// Array literals
// const array = [1, 2];
// const [first, second] = array;
// console.log(first, second);

// Skip array elements
// const array = [1, 2, 3];
// const [, , third] = array;
// console.log(third);

// Works with any iterable value (not only arrays)
// const myIterableValue = new Set()
//   .add("n")
//   .add("u")
//   .add("t");
// const [first, second] = myIterableValue;
// console.log(first);
// console.log(second);

// Strings are also iterable!
// const [x, y, z] = "peanut";
// console.log(x, y, z);

// Accessing to an unexisting array position?
// const [, , , , fifth] = [1, 2, 3, 4];
// console.log(fifth);

// Default values
// const [, , , , fifth = "pepelu"] = [1, 2, 3, 4];
// console.log(fifth);

// ----------------------------------
// 3. 💥 Object destructuring

// Object literals with shorthands
// const nut = { name: "peanut", shell: true };
// const { name, shell } = nut;
// console.log(`Has my ${name} a shell? ${shell}`);

// Object destructuring primitive values
// const { length, toString } = "pepeanut";
// console.log(length, toString);

// Aliasing object keys
// const nut = { name: "peanut", shell: true };
// const { name: nutName, shell: hasShell } = nut;
// console.log(`Has my ${nutName} a shell? ${hasShell}`);

// const nut = { name: "peanut", shell: true };
// const { name: nutName, shell: hasShell } = nut;
// console.log(`Has my ${name} a shell? ${shell}`);

// Default values
// const nut = { shell: true };
// const { name = "pepeanut", shell: hasShell = false } = nut;
// console.log(`Has my ${name} a shell? ${hasShell}`);

// In javascript Arrays are also objects
// So, we can object-destructure Arrays
// const { 0: x, 1: y, 2: z } = ["peanut", "cashewnut", "chesnut"];
// console.log(x, y, z);

// ----------------------------------
// 4. 😎 Other pretty cool destructuring examples

// function foo() {
//   return [1, 2, 3];
// }
// const [first, secod] = foo();
// console.log(first, secod);

// function shellGuesser({ name, shell }) {
//   return `Has my ${name} a shell? ${shell}`;
// }
// const nut = { name: "peanut", shell: true };
// console.log(shellGuesser(nut));

// const nuts = [
//   {
//     name: "peanut",
//     attributes: {
//       color: "brownish",
//       shell: true
//     },
//     products: ["peanut butter", "peanut powder"]
//   },
//   {
//     name: "cashew",
//     attributes: {
//       color: "brown",
//       shell: true
//     },
//     products: []
//   }
// ];

// const [
//   {
//     attributes: { shell: hasShell }
//   }
// ] = nuts;
// console.log(hasShell);

// const [{ color }] = nuts;
// console.log(color);

// const [, , { name }] = nuts;
// console.log(name);

// const [
//   ,
//   {
//     products: { length }
//   }
// ] = nuts;
// console.log(length);

// const [, , { name }] = nuts;
// console.log(name);

// const [[name]] = nuts;
// console.log(name);

// const result = Object.entries(nuts).map(([key, { name }]) => {
//   return `${Number(key) + 1} -> ${name}`;
// });
// console.log(result);

// ----------------------------------
// 5. 🎱🎱🎱 Rest syntax

// In destructuring
// const nuts = ["peanut", "cashewnut", "chesnut", "tunaep"];
// const [firstNut, ...otherNuts] = nuts;
// console.log(firstNut, otherNuts);

// In arguments
// function giveMeNuts(...nuts) {
//   return nuts.map(nut => `Nut: ${nut}`);
// }
// const result = giveMeNuts("peanut", "cashewnut", "chesnut");
// console.log(result);

// ----------------------------------
// 6. 🎱🎱🎱 Spread syntax

// Cloning arrays
// const array = ["peanut", "pepeanut"];
// const arrayClone = [...array];
// console.log(arrayClone);

// Combining arrays
// const firstArray = ["peanut"];
// const secondArray = ["pepeanut"];
// const combinedArray = [...firstArray, ...secondArray, "hazlenut"];
// console.log(combinedArray);

// Combining arrays with strings
// const someString = "peanut";
// const combinedArray = [1, 2, ...someString];
// console.log(combinedArray);

// Destructuring objects
// const object = { name: "peanut", shell: true, color: "brown" };
// const { name, ...otherObjectProps } = object;
// console.log(name, otherObjectProps);

// Cloning objects
// const object = {name: "peanut"};
// const objectClone = {...object};
// console.log(objectClone);

// Combining objects
// const firstObject = { name: "peanut" };
// const secondObject = { shell: "pepeanut" };
// const combinedObject = { ...firstObject, ...secondObject };
// console.log(combinedObject);

// Overwrite Object properties when combining
// const firstObject = { name: "peanut" };
// const secondObject = { name: "This is peanuts mdfk!" };
// const combinedObject = { ...firstObject, ...secondObject };
// console.log(combinedObject);

// Destructuring arguments of a function call
// const helloNut = (name, color) => `Hello ${color} ${name}`;
// const nut = ["Peanut", "brown"];
// const result = helloNut(...nut);
// console.log(result);

// ----------------------------------
// 🤯 Spread syntax & Rest syntax combined
// const nuts = ["pea", "ches", "hazle"];
// function giveMeNuts(...nuts /* rest syntax */) {
//   return nuts.map(nut => `${nut}nut`);
// }
// console.log(giveMeNuts(...nuts /* spread syntax */, "cashew"));
// console.log(giveMeNuts(nuts[0], nuts[1], nuts[2], "cashew"));
