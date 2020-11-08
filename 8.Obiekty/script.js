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
var car={
    name:"BMW",
    age: 12
}


for(let key in car){
    console.log(`${key}: ${car[key]}`);
}

//5
const car = {
	name: 'Fiat',
	age: 35,
	color: 'red'
};
const carCountryCity = {
	country: 'Poland',
	city: 'Krakow'
};
car.production = carCountryCity;
console.log(car.production.country, car.production.city);

//6

const car = {
	name: 'Fiat',
	age: 35,
	color: 'red'
};

car.width = 156;

car.hello = () => {
    console.log("Hello");
}

car.hello();

