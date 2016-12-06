/**
 * Created by dongsj on 2016/12/6.
 */
namespace LearnInterface {

    interface Person {
        name: string;
        age?: number;
        //未知属性
        // [someName: string]: any;
        // greet:(name: string)=>void;
        greet(name: string): void;
    }
    // function greet(person: {name: string}) {
    function greet(person: Person) {
        console.log(`Hello,${person.name}`);
    }

    const person: Person = {
        name: 'dongsj',
        age: 27,
        // hobbies: ['Cooking', 'Sports'],
        greet(name: string){
            console.log('Greet:' + name);
        }
    };
    greet(person);
    // greet({name: 'dongsj'});
    person.greet('dongsj');
    // err
    // greet({firstName:'dongsj'});

    class CPerson implements Person {
        name: string;
        someName: string;

        constructor() {
        }

        greet(name: string): void {
            console.log(`Greeting from Class,${name}`)
        }

    }
    let cperson: CPerson = new CPerson();
    cperson.greet('dongsj');
    cperson.someName = 'n2';
    console.log(cperson.someName);

    interface DoubleValueFunc {
        (number1: number, number2: number): number;
    }
    let myDoubleValueFunction: DoubleValueFunc;
    myDoubleValueFunction = function (v1: number, v2: number) {
        return v1 + v2;
    };
    console.log(myDoubleValueFunction(10, 20));

    interface AgedPerson extends Person {
        age: number;
    }
    const oldPerson: AgedPerson = {
        age: 27,
        name: 'heihei',
        greet(name: string){
            console.log(name);
        }
    };
    oldPerson.greet('test');
}