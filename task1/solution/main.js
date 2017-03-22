var welcome () => "Hello welcome to the modern javascript training!";

var authors_data = [
  "Gert Hengeveld",
  "Norbert de Langen",
];
var authors = () => "brought to you by " + authors_data.join(" and ");

var success = () => "You have succesfully run the main.js file in NodeJS 👏🏻";

var end = () => "You have completed Task #1";

var print = message => console.log(message);

var whiteline = () => '';

var story = [
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
