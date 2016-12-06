///<reference path='./circleMath.ts'/>
///<reference path='./rectangleMath.ts'/>
// tsc MyMath.ts --outFile app.js
(function () {
    import CircleMath=MyMath.cicle;
    const PI = 3.14;
    console.log(MyMath.cicle.calculateCircumference(3));
    console.log(CircleMath.calculateCircumference(3));
    console.log(MyMath.calculateRectangle(10, 20));
})();