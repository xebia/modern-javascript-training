function isEven(n) {
   return n % 2 == 0;
}

function isOdd(n) {
   return Math.abs(n % 2) == 1;
}

list = [4, 8, 15, 16, 23, 42];

odd = list.filter(isOdd);
even = list.filter(isEven);
