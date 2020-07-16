let greet: (a: string, b: string) => void;
greet = (name: string, b: string) => {
  console.log(`${name} and ${b}`);
};
greet("hello", "you");
