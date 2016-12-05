(function () {
    class Person {
        // public name:string; //default public
        name: string;
        private type: string;
        protected age: number = 27;

        constructor(name: string, public username: string) {
            this.name = name;
        }

        printAge() {
            console.log(this.age);
        }

        setType(type: string) {
            this.type = type;
            this.printType();
        }

        private printType() {
            console.log(this.type);
        }
    }

    let person = new Person('dongsj', 'supperdsj');
    console.log(person);
    person.printAge();
    person.setType('heiheihei');
// error
// person.printType();
// person.type='error';
// person.age=-1;
// console.log(person);

// Inheritance
    class Dongsj extends Person {
        constructor(name) {
            super(name, '232171773');
            this.age = 31;
            // error
            // this.type='error';
        }
    }
    const dongsj = new Dongsj('supperdsj');
    console.log(dongsj);

// Getters and Setters
    class Plant {
        set species(value: string) {
            console.log('set', value);
            this._species = value;
        }

        get species(): string {
            console.log('get', this._species);
            return this._species;
        }

        private _species: string = 'defult';
    }
    let plant = new Plant();
    console.log(plant.species);
    plant.species = 'what';
    console.log(plant.species);

// Static Properties & Methods
    class Helpers {
        static PI: number = 3.14;

        static calcCircumfrence(diamter: number): number {
            return this.PI * diamter;
        }
    }
    console.log(Helpers.calcCircumfrence(4));
    console.log(new Helpers());

// Abstract Class
    abstract class Project {
        projectName: string;
        budget: number;

        abstract changeName(name: string): void;

        calcBudget() {
            return this.budget * 2;
        }
    }
//error
// let project=new Project();

    class ITProject extends Project {

        changeName(name: string): void {
            this.projectName = name;
        }
    }
    let project = new ITProject();
    console.log(project);
    project.changeName('new Name');
    console.log(project);

//private constructors
    class OnlyOne {
        private static instance: OnlyOne;

        static getInstance() {
            if (!OnlyOne.instance) {
                // console.log('init instance');
                OnlyOne.instance = new OnlyOne('The Only One');
            }
            // console.log(this.instance==OnlyOne.instance);//true
            return OnlyOne.instance;
        }

        private constructor(public name: string) {
        }
    }
// error
// let wrong=new OnlyOne('wrong');
    let right = OnlyOne.getInstance();
    let right2 = OnlyOne.getInstance();
    console.log(right);
    console.log(right2);

// readonly
    class RO {
        public readonly name: string = 'readonly';
    }
    let ro = new RO();
// error
// ro.name='can not write';
})();