"use strict";
var person = /** @class */ (function () {
    function person() {
        this.id = 0;
        this.licensed = false;
    }
    person.prototype.show = function () {
        console.log(this.id + " " + this.licensed);
    };
    return person;
}());
var age = 26;
var myName = "wololo";
var breaker = "ayoyo";
breaker = 12;
breaker = true;
var micah = new person();
micah.show();
