class person {
  id: number;
  licensed: boolean;
  constructor() {
    this.id = 0;
    this.licensed = false;
  }
  show() {
    console.log(this.id + " " + this.licensed);
  }
}

let age: number = 26;
let myName: string | number = "wololo";
let breaker: any = "ayoyo";
breaker = 12;
breaker = true;
let micah: person = new person();
micah.show();
