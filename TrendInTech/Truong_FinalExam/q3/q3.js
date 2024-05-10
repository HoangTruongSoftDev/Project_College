class Animal {
    constructor(name, age, sound) {
        this.name = name;
        this.age = age;
        this.sound = sound;
    }

    eat() {
        console.log(this.name + " is eating");
    }
    sleep() {
        console.log(this.name + " is sleeping");
    }
    reproduce() {
        console.log(this.name + " is reproducing");
    }
    makeSound() {
        console.log(this.name + " is making " + this.sound);
    }
}

class Mammal extends Animal {
    constructor(name, age, sound) {
        super(name, age, sound);
    }
}

class Bird extends Animal {
    constructor(name, age, sound) {
        super(name, age, sound);
    }

    reproduce() {
        this.layEggs();
        super.reproduce();
    }
    layEggs() {
        console.log(this.name + " is laying eggs");
    }
    fly() {
        console.log(this.name + " is flying");
    }
}

class Reptile extends Animal {
    constructor(name, age, sound) {
        super(name, age, sound);
    }
    crawl() {
        console.log(this.name + " is crawling");
    }
    shedSkin() {
        console.log(this.name + " is shedding skin");
    }
}
let tiger = new Mammal("Tiger", 23, "Roar");
let eagle = new Bird("Eagle", 100, "Screech");
let snake = new Reptile("Snake", 210, "Hiss");

tiger.eat();
tiger.reproduce();
tiger.makeSound();
tiger.sleep();

eagle.reproduce();
eagle.fly();
eagle.eat();
eagle.makeSound();
eagle.sleep();


snake.crawl();
snake.shedSkin();
snake.eat();
snake.makeSound();
snake.sleep();
snake.reproduce();


