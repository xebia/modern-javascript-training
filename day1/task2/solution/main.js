const print = message => console.log(message);

const end = () => "You have completed Task #2";

const personFactory = (name = 'Gert') => ({
  say: message => `${name} says: "${message}" at ${(new Date()).toLocaleTimeString()}`
});

function main () {
  const person1 = personFactory();
  const person2 = personFactory('Jan');

  print(person1.say('Hello!')); // Gert said "Hello!" at 13:37:00
  print(person2.say('Hello!')); // Jan said "Hello!" at 00:42:01
  print(end())
}

main();
