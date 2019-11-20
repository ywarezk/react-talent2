"use strict"

// console.log(this);

const hello = function () {
    console.log(this);

    // this.hello = 'world';
}

const hello1 = () => {
    console.log(this);
}

// hello1();
// hello1.call({ hello: 'world' })
// hello1.apply({ hello: 'world' })
// const hello2 = hello1.bind({ hello: 'world' })

const a = { world: hello };
a.world();
const b = { foo: hello };
b.foo();

class Person {
    constructor() {
        this.age = 34;
    }

    birthday() {
        this.age++;
    }

    birthday1 = () => {
        this.age++;
    }
}

const person = new Person();
person.birthday1();
console.log(person.age); // 35

const c = { birthday1: person.birthday1, age: 10 }
c.birthday1();
console.log(person.age); // 36 
console.log(c.age); // 10

