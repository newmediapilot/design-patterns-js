export class MySingleton {

    _number = 0;
    _name = "foobaz";

    constructor() {
        if (!MySingleton.$i) MySingleton.$i = this;

        return MySingleton.$i;
    }

    increment() {
        this._number++;

        console.log('mySingletonInstance2.increment:', this._number);
    }

    setName(string) {
        this._name = string;

        console.log('mySingletonInstance2.setName:', string);
    }

    get name() {
        return this._name;
    }

    get number() {
        return this._number;
    }
}

// Many Instances, One Memory Reference

const mySingletonInstance1 = new MySingleton();

console.log('mySingletonInstance1.number:', mySingletonInstance1.number);

mySingletonInstance1.increment();

const mySingletonInstance2 = new MySingleton();

console.log('mySingletonInstance2.number:', mySingletonInstance2.number);

mySingletonInstance2.setName('foobaz2');

console.log('mySingletonInstance2.name:', mySingletonInstance2.name);

