/* EXPORTING WHEN DEFINING */

export default 'nothing special about it';

export const MY_CONST = 5;

export function myFunc() {
  return MY_CONST;
}

export const myArrowFunc = () => MY_CONST;

export class MyClass {
  constructor() {
    this.foo = MY_CONST;
  }
}
