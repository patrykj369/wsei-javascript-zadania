//1

let car = {
    name: "BMW",
    age: 6
}

console.log(car.name);
console.log(car.age);

//2

let car = {
    name: "BMW",
    age: 6,
    changeName: function(newName) {
        this.name = newName;
    }
}

car.changeName("polonez");
console.log(car.name);
console.log(car.age);

//3

var newObject = {
    sum: 0,
    sumValues: function(array) {
        array.forEach(item => this.sum += item);
    }
}

newObject.sumValues([1, 5, 7]);
console.log(newObject.sum);

//4

