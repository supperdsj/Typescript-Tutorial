/**
 * Created by dongsj on 2016/11/29.
 */
//string
let myName: string = 'dongsj';
//error
// myName=27;

//number
let myAge: number = 27;
//error
// myAge='27';

//boolean
let hasHobbies: boolean = false;
//error
// hasHobbies='true';

//auto assign types to any
let myRealAge;
myRealAge = 27;
myRealAge = '27';

//auto assign types to number
let myRealAgeHa = 27;
//error
// myRealAgeHa = '27';

//tuples
let address: [string,number] = ['haidian', 998];
//error
// address=[1,2];

//enum
enum Color{
    Red, //0
    Yellow, //1
    Green, //2
    Blue = 100,
    Black = 101,
    White = 102
    //error
    // White='white'
}
let myColor: Color = Color.Green;
console.log(myColor);
console.log(Color.Black);
console.log(Color.White);

//any
let car: any = 'BMW';
car = {brand: 'BMW', series: 3};

//functions
function returnMyname(): string {
    //error
    // return myAge;
    return myName;
}
console.log(returnMyname());

//void return type of function
function sayHello(): void {
    console.log('Hello!');
    //error
    // return 1;
}
sayHello();

//argument types
function mulitiply(v1: number, v2: number): number {
    return v1 * v2;
}
console.log(mulitiply(2, 3));
//error
// console.log(mulitiply('2',3));

//function types
// let myMultiply: ()=>void;
let myMultiply: (v1: number, v2: number)=>number;
//error
// myMultiply = sayHello;
// myMultiply();
myMultiply = mulitiply;
console.log(myMultiply(2, 4));

//object
let userData: {name: string,age: number} = {
    name: 'dongsj',
    age: 27
};
//error
// userData.name=123;
// userData={};
// userData={n:'dongsj',a:27};


//complex object
let complex: {data: number[],output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};
console.log(complex.output(true));

//type aliases
type Complex={data: number[],output: (all: boolean) => number[]};
let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};
console.log(complex2.output(true));

//union types
let myRealRealAge: number|string = 27;
myRealRealAge = '27';
//error
// myRealRealAge=true;

//check types
let finalValue = 123;
if (typeof finalValue == 'string') {
    console.log('s:' + typeof finalValue);
} else {
    console.log('o:' + typeof finalValue);
}

//never
function neverReturns(): never {
    throw new Error('An error');
}

//Nullable types,need to add "strictNullChecks":true in tsconfig.json
//error
// let canBeNull=12;
// canBeNull=null;
let canBeNull: number|null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny=null;
//error
// canThisBeAny=12;