( function () {
    var Animal = {
        getName: function(name){
            return this.name;
        }
    };

    function Dog (name) {
        this.name = name,
            this.bark = function() {
                return 'Dog ' + this.name + ' is barking';
            };

    };
    Dog.prototype = Animal;
    var dog = new Dog('Aban');

    console.log("ES5");

    console.log(dog.bark());
    console.log(dog.getName() === 'Aban');
    console.log(dog.bark() === 'Dog Aban is barking');
})()
