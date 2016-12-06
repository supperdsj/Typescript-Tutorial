///<reference path='./circleMath.ts'/>
///<reference path='./rectangleMath.ts'/>
// tsc MyMath.ts --outFile app.js
import CircleMath=MyMath.cicle;
(function () {
    const PI = 3.14;
    console.log(MyMath.cicle.calculateCircumference(3));
    console.log(CircleMath.calculateCircumference(3));
    console.log(MyMath.calculateRectangle(10, 20));
})();