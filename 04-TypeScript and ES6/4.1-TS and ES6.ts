/**
 * Created by dongsj on 2016/11/29.
 */
(function () {
//let
    let variable = "Test";
    console.log(variable);
    variable = "Other value";
    console.log(variable);

//const
    const maxLevel = 100;
//error
// maxLevel=200;
//block scope
    function reset() {
        let variable = null;
        console.log(variable);
    }

    reset();
    console.log(variable);

//arrow functions
    console.log('arrow functions');
    const addNumbers = function (number1: number, number2: number): number {
        return number1 + number2;
    };
    console.log(addNumbers(10, 3));

    const multiplyNumbers = (number1: number, number2: number): number => number1 * number2;
    console.log(multiplyNumbers(100, 3));

    const greet = () => {
        console.log('Hello!');
    };
    greet();

    const greetFrient = friend => console.log(friend);
    greetFrient('dongsj');

//default parameters
    console.log('Default parameters');
    const countdown = (start: number = 10): void => {
        console.log('To countdown', start);
        while (start > 0) {
            start--;
        }
        console.log('Done:', start);
    };
    countdown(3);
    countdown();

// Rest & Sqread
    console.log('REST & SPREAD');
    const numbers = [1, 10, 99, -5];
    console.log(Math.max(1, 10, 99, -5));
    console.log(Math.max(...numbers));

// function makeArray(arg1: number, arg2: number) {
//     return [arg1, arg2];
// }
// console.log(makeArray(1, 2));
    function makerArray(name: string, ...args: number[]) {
        return args;
    }

    console.log(makerArray('heihei', 1, 2, 3, 4, 5));

//Destructuring
    console.log('Destructuring');
    const myHobbies = ['Cooking', 'Sports'];
// const hobby1=myHobbies[0];
// const hobby2=myHobbies[1];
    const [hobby1,hobby2]=myHobbies;
    console.log(hobby1, hobby2);
    const userDataU = {userName: 'Dongsj', age: 27};
// const userName=userData.userName;
// const age=userData.age;
    const {userName:myNameU, age:myAgeU}=userDataU;
    console.log(myNameU, myAgeU);

//Template Literals
    const userName = 'Dongsj';
// const greeting = 'hello , i am' + userName + ' ~';
    const greeting = `hello , i am ${userName} ~`;
    console.log(greeting);
})();
