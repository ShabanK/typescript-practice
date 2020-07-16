let foo: Function;
foo = () => {
  return 2;
};
const fun = (a: number, b: number, c: number | string = 20) => {
  console.log(a + b);
  console.log(c);
};
fun(21, 21, "okay");

const minus = (a: number, b: number): number => {
  return a - b;
};
console.log(minus(10, 20));
