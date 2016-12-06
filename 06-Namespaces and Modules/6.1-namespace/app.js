var MyMath;
(function (MyMath) {
    var cicle;
    (function (cicle) {
        function calculateCircumference(diameter) {
            return diameter * PI;
        }
        cicle.calculateCircumference = calculateCircumference;
    })(cicle = MyMath.cicle || (MyMath.cicle = {}));
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
///<reference path='./circleMath.ts'/>
///<reference path='./rectangleMath.ts'/>
// tsc MyMath.ts --outFile app.js
var CircleMath = MyMath.cicle;
var PI = 3.14;
console.log(MyMath.cicle.calculateCircumference(3));
console.log(CircleMath.calculateCircumference(3));
console.log(MyMath.calculateRectangle(10, 20));
