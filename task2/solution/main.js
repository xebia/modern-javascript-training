const print = message => console.log(message);

const end = () => "You have completed Task #2";

const personFactory = (name = 'Gert') => ({
  say: message => `${name} says: ${message}`,
});

function main () {
  const person1 = personFactory();
  const person2 = personFactory('Jan');

  print(person1.say('Hello!'));
  print(person2.say('Hello!'));
  print(end())
}

main();
