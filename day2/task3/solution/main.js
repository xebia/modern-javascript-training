const people = [
  { name: "Bethany Wunsch", age: 23, gender: "f" },
  { name: "Bruce Wiza", age: 17, gender: "m" },
  { name: "Candice Herson", age: 65, gender: "f" },
  { name: "Math Random", age: 28, gender: "m" },
  { name: "Felix Jerde", age: 42, gender: "m" },
  { name: "Laila Murazik", age: 36, gender: "f" }
];

const result = people
  .filter(p => p.gender === "m")
  .map(p => p.age)
  .reduce((sum, age, index, array) => {
    sum = sum + age;
    return index === array.length - 1 ? sum / array.length : sum;
  });

console.log(result); // => 29
