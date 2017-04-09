const welcome = () => "Hello welcome to the modern javascript training!";

const authors_data = [
  "Gert Hengeveld",
  "Norbert de Langen",
];
const authors = () => "brought to you by " + authors_data.join(" and ");

const success = () => "You have succesfully run the main.js file in NodeJS 👏🏻";

const end = () => "You have completed Task #1";

const print = message => console.log(message);

const whiteline = () => '';

const story = [
  whiteline(),
  welcome(),
  authors(),
  whiteline(),
  success(),
  end(),
  whiteline(),
];

function main () {
  story.forEach(text => print(text));
}

main();
