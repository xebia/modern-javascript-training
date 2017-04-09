export const now = () => (new Date());
export const isToday = (input) => date(input) === date(now());
export const time = (input) => input.toLocaleTimeString();
export const date = (input) => input.toLocaleDateString();
