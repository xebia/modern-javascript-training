var print = message => console.log(message);

var end = () => "You have completed Task #2";

var personFactory;

function main () {
  var person1 = personFactory();
  var person2 = personFactory('Jan');

  print(person1.say('Hello!'));
  print(person2.say('Hello!'));

  print(end())
}

main();
