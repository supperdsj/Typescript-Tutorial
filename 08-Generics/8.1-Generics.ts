function echo(data: any): any {
    return data;
}

console.log(echo('Dongsj'));
console.log(echo(27));
console.log(echo({name: 'Donsj', age: 27}));
console.log(echo('Dongsj').length);
console.log(echo(27).length);
console.log(echo({name: 'Donsj', age: 27}).length);

// Better Generic
function betterEcho<T>(data: T): T {
    return data;
}
console.log(betterEcho('Dongsj'));
// error
// console.log(betterEcho<number>('Dongsj'));
console.log(betterEcho(27));
console.log(betterEcho({name: 'Donsj', age: 27}));
console.log(betterEcho('Dongsj').length);
// error
// console.log(betterEcho(27).length);
// error
// console.log(betterEcho({name: 'Donsj', age: 27}).length);

// Built-in Generics
const testResults: Array<Number> = [1.94, 2.33];
testResults.push(2);
// error
// testResults.push('string');

// Arrays
function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}
printAll<string>(['apple', 'banana']);
// error
// printAll<string>(['apple', 1]);
printAll(['apple', 1]);

// Generic Types
const echo2: <T>(data: T)=>T = echo;
console.log(echo2<string>('Someting'));

// Generic Classes
class SimpleMath<T extends number|string> {
    baseValue: T;
    multiplyValue: T;

    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<string|number>();
// const simpleMath = new SimpleMath<number>();
// error
// const simpleMath=new SimpleMath<boolean>();
simpleMath.multiplyValue = '20';
simpleMath.baseValue = 10;
// error
// simpleMath.baseValue = {};
console.log(simpleMath.calculate());

// class SimpleMath2<T extends U,U extends number|string> {
class SimpleMath2<T extends number|string,U extends number|string> {
    baseValue: T;
    multiplyValue: U;

    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath2 = new SimpleMath2<string,number>();
// error
// simpleMath2.baseValue = 10;
// simpleMath2.multiplyValue = '20';
simpleMath2.baseValue = '10';
simpleMath2.multiplyValue = 20;

console.log(simpleMath.calculate());