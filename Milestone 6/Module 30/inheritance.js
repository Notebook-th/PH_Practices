class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Dog extends Animal {
    constructor(name, breed){
        super(name)
        this.breed = breed;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }

    bark() {
        console.log(`${this.breed} is barking`);
    }
}

class Cat extends Animal {
    constructor(name, color){
       super(name)
        this.color = color;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}

const dog1 = new Dog('coffee', 'deshi')
const cat1 = new Cat('coffee', 'Blue')
dog1.eat()
cat1.sleep()
console.log(dog1)
console.log(cat1)