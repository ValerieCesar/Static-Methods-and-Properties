class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    getName() {
        return `The person name is ${this.name}`;
    }
    getAge() {
        return `The person age is ${this.age}`;
    }
    getHeight() {
        return `The person height is ${this.height}`;
    }
}

class PostalWorker extends Person {
    steal() {
        console.log('lets get away!');
    }
}

class Chef extends Person {
    cuisine() {
        console.log('Some delicious cuisine!');
    }
}

const jack = new PostalWorker('jim', 30, 120);
const jhon = new PostalWorker('jam', 40, 125);
console.log(jack);
jack.steal();


const bobby = new Chef('bob', 25, 130);
const jj = new Chef('jnj', 35, 140);
console.log(jj);
jj.cuisine();
console.log(bobby.getAge());
