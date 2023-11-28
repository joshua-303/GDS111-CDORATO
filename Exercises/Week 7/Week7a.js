class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    getName() {
        return this.name;
    }
    getYear() {
        return this.year;
    }
}

const miata = new Car("Mazda Miata", 2024);

console.log("My car is a " + miata.getName());
console.log("A " + miata.getYear() + " model.");