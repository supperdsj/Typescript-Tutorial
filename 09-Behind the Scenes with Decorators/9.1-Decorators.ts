(function () {
    function logged(constructorFun: Function) {
        console.log(constructorFun);
    }

    @logged
    class Person {
        constructor() {
            console.log('Hello Decorators');
        }
    }

    // Factory
    function logging(value: boolean) {
        return value ? logged : () => null;
    }

    @logging(false)
    class Car {

    }
    function printable(constructorFun: Function) {
        constructorFun.prototype.print = function () {
            console.log(this);
        }
    }

    // Advanced
    @logging(false)
    @printable
    class Plant {
        name = 'Green Plant';
    }
    const plant = new Plant();
    (<any>plant).print();

    // Method Decorator
    function editable(value: boolean) {
        return function (target: any, propName: string, descriptor: PropertyDescriptor) {
            console.log('Method Decorator');
            console.log(target);
            console.log(propName);
            console.log(descriptor);
            descriptor.writable = value;
        }
    }

    // Property Decorator
    function overwritable(value: boolean) {
        return function (target: any, propName: string): any {
            const newDescriptor: PropertyDescriptor = {
                writable: value
            };
            return newDescriptor;
        }
    }


    class Project {
        @overwritable(false)
        projectName: string;

        constructor(name: string) {
            this.projectName = name;
        }

        @editable(false)
        calcBudget() {
            console.log(1000);
        }
    }
    const project = new Project('super project');
    project.calcBudget();
    project.calcBudget = function () {
        console.log(2000);
    };
    project.calcBudget();
    console.log(project);

    // Parameter Decorator
    function printInfo(target:any,methodName:string,paramIndex:number){
        console.log('Target:',target);
        console.log('methodName:',methodName);
        console.log('paramIndex:',paramIndex);
    }
    class Course{
        name:string;

        constructor(name: string) {
            this.name = name;
        }

        printStudentNumbers(mode:string,@printInfo printAll:boolean){
            if(printAll){
                console.log(100000);
            }else{
                console.log(150);
            }
        }
    }
    const course=new Course('dongsj');
    course.printStudentNumbers('anything',true);
    course.printStudentNumbers('anything',false);
})();