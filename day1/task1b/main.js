function welcome () {
  return "Hello welcome to the modern javascript training!";
}

var authors_data = [
  "Gert Hengeveld",
  "Norbert de Langen",
];
function authors () {
  return "brought to you by " + authors_data.join(" and ");
}

function success () {
  return "You have succesfully run the main.js file in NodeJS 👏🏻";
}

function end () {
  return "You have completed Task #1b";
}

function print (message) {
  console.log(message);
}
function whiteline () {
  return '';
}

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
  story.forEach(function (text) {
    print(text);
  });
}

main();
