// // Exercise 1 - How was your TypeScript Class?
// function Car(name) {
//     this.name = name;
//     this.acceleration = 0;
//     this.honk = function() {
//         console.log("Toooooooooot!");
//     };
//     this.accelerate = function(speed) {
//         this.acceleration = this.acceleration + speed;
//     } }
// var car = new Car("BMW");
// car.honk();
// console.log(car.acceleration);
// car.accelerate(10);
// console.log(car.acceleration);
// // Exercise 2 - Two objects, based on each other ...
// var baseObject = {
//     width: 0,
//     length: 0 };
// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//     return this.width * this.length;
// };
// console.log(rectangle.calcSize());
// // Exercise 3 - Make sure to compile to ES5 (set the target
// in tsconfig.json)
// var person = {
//     _firstName: ""
// };
//
// Object.defineProperty(person, "firstName", {
//     get: function () {
//         return this._firstName;
//     },
//     set: function (value) {
//         if (value.length > 3) {
//             this._firstName = value;
//         }
//         else {
//             this._firstName = "";
//         } },
//     enumerable: true,
//     configurable: true
// });
// console.log(person.firstName);
// person.firstName = "Ma";
// console.log(person.firstName);
// person.firstName = "Maximilian";
// console.log(person.firstName);

// Exercise 1 - How was your TypeScript Class?
(function () {
    class Car {
        public name: string;
        public acceleration: number;

        constructor(name: string) {
            this.name = name;
            this.acceleration = 0;
        }

        honk() {
            console.log('Tooooooooot!');
        }

        accelerate(speed: number) {
            this.acceleration += speed;
        }
    }
    let car = new Car('BMW');
    car.honk();
    console.log(car.acceleration);
    car.accelerate(10);
    console.log(car.acceleration);
// Exercise 2 - Two objects, based on each other ...
    class BaseObject{
        public width:number;
        public length:number;

        constructor(width: number, length: number) {
            this.width = width;
            this.length = length;
        }
    }
    let baseObject:BaseObject=new BaseObject(0,0);
    class RectAngle extends BaseObject{
        calcSize(){
            return this.width * this.length;
        }
    }
    let rectangle=new RectAngle(5,2);
    console.log(rectangle.calcSize());
// Exercise 3 - Make sure to compile to ES5 (set the targetin tsconfig.json)
    class Person {
        private _firstName: string;

        constructor(firstName: string) {
            this._firstName = firstName;
        }

        get firstName(): string {
            return this._firstName;
        }

        set firstName(value: string) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "";
            }
        }
    }
    let person:Person=new Person('');
    console.log(person.firstName);
    person.firstName = "Ma";
    console.log(person.firstName);
    person.firstName = "Maximilian";
    console.log(person.firstName);
})();