const people = [
  { name: "Bethany Wunsch", age: 23, gender: "f" },
  { name: "Bruce Wiza", age: 17, gender: "m" },
  { name: "Candice Herson", age: 65, gender: "f" },
  { name: "Math Random", age: 28, gender: "m" },
  { name: "Felix Jerde", age: 42, gender: "m" },
  { name: "Laila Murazik", age: 36, gender: "f" }
];

const men = people.filter(p => p.gender === "m");
const sum = men.reduce((sum, man) => sum + man.age, 0);
const result = sum / men.length;

// Alternatively, avoiding intermediate values:
// const result = people
//   .filter(p => p.gender === "m")
//   .map(p => p.age)
//   .reduce((sum, age, index, array) => {
//     sum = sum + age;
//     return index === array.length - 1 ? sum / array.length : sum;
//   });
//
// Or, using a recursive function:
// const average = ([number, ...rest], { sum = 0, num = 0 } = {}) => {
//   if (!number) return sum / num;
//   return average(rest, { sum: sum + number, num: num + 1 });
// }
// const result = average(people.filter(p => p.gender === "m").map(p => p.age))

console.log(result); // => 29
