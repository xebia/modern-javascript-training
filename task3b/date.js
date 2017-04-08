const now = () => (new Date());
const isToday = (input) => date(input) === date(now());
const time = (input) => input.toLocaleTimeString();
const date = (input) => input.toLocaleDateString();

module.exports = {
  now,
  isToday,
  time,
  date
};
