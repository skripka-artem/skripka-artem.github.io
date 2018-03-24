( function () {
    class Animal  {
        constructor(name) {
        }
        getName(name) {
            return this.name;
        }
    }
    ;
class Dog extends Animal {
    constructor(name) {
        super(name);
        this.name = name,
            this.bark = function() {
                return 'Dog ' + this.name + ' is barking';
            };
    }
}

    let dog = new Dog('Aban');
    console.log("ES6");

    console.log(dog.bark());
    console.log(dog.getName() === 'Aban');
    console.log(dog.bark() === 'Dog Aban is barking');

})()



