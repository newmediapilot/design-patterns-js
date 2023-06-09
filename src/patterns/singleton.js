export class MySingleton {

    _number = 0;
    _name = "foo-baz";

    /**
     * Singleton pattern
     * @returns {MySingleton|*}
     */
    constructor() {
        if (!MySingleton.$i) MySingleton.$i = this;

        return MySingleton.$i;
    }

    /**
     * Increments number
     */
    increment() {
        this._number++;

        console.log('mySingletonInstance2.increment:', this._number);
    }

    /**
     * modifies string
     * @param string
     */
    setName(string) {
        this._name = string;

        console.log('mySingletonInstance2.setName:', string);
    }

    /**
     * Fetches name
     * @returns {string}
     */
    get name() {
        return this._name;
    }

    /**
     * Fetches number
     * @returns {number}
     */
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

